import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { MainContainer } from './search.styled'

import { Header } from '../../organism/header'
import { SearchResult } from '../../organism/search-result'

import { API } from '../../../utils/api'
import { Authentication } from '../../../utils/authentication'

export class Search extends Component {
  state = {
    redirect: null,
    searchText: null,
    searchType: null,
    searchResult: {},
    isLoading: false,
  }

  searchText = this.props.match.params.q
  searchType = this.props.match.params.type

  componentDidUpdate (prevProps) {
    const prevParams = prevProps.match.params
    const { params } = this.props.match
  }

  componentDidMount () {
    const { params } = this.props.match

    if (params.albums) {
      return this.searchAlbums(params.albums)(params.tracks)
    }

    if (params.q && params.type) {
      return this.search()
    }
  }
  
  onChange = ({ searchText, searchType, defaultSearchType }) => {
    if (searchText !== undefined) this.setState({ searchText }, this.search)
    if (searchType) this.setState({ searchType }, () => {
      if (this.state.searchText) {
        console.log(this.state.searchText)
        this.search()
      }
    })
    if (defaultSearchType) this.setState({ searchType: defaultSearchType })
  }

  searchTimer = 0
  async search () {
    clearTimeout(this.searchTimer)

    let { searchText, searchType } = this.state

    if (!searchText) searchText = this.searchText
    if (!searchType) searchType = this.searchType

    if (!searchText || !searchType) return

    this.setState({
      isLoading: true,
      redirect: `/search/${searchType}/${searchText}`,
    })

    this.searchTimer = setTimeout(async () => {
      if (!searchText || !searchType) {
        return this.setState({
          searchResult: {},
          isLoading: false,
        })
      }
  
      const searchResult = await API.search(searchText, searchType).then(response => response.json())
      
      this.setState({
        searchResult: searchResult,
        isLoading: false,
      })
    }, 800)
  }

  searchAlbums = artistID => async albumID => {
    this.setState({ isLoading: true })
    
    const { url, params } = this.props.match
    const albums = await API.searchAlbums(artistID).then(response => response.json())
    
    this.setState({
      searchResult: { albums },
      isLoading: false,
      redirect: !params.albums && `${url}/${artistID}`.replace(/\/\//g, '/'),
    }, () => {
      if (albumID) {
        for (let i = 0; i < albums.items.length; i++) {
          const album = albums.items[i]
          if (album.id === albumID) {
            return this.searchTracks(albumID, album.images)()
          }
        }
      }
    })
  }

  searchTracks = (albumID, images = []) => async () => {
    this.setState({ isLoading: true })

    const { url, params } = this.props.match
    const tracks = await API.searchTracks(albumID).then(response => response.json())

    tracks.images = images

    this.setState({
      searchResult: { tracks },
      isLoading: false,
      redirect: !params.tracks && `${url}/${!params.albums ? tracks.items[0].artists[0].id : ''}/${albumID}`.replace(/\/\//g, '/'),
    })
  }

  render () {
    if (!Authentication.logged) {
      return <Redirect to="/" />
    }

    const {
      searchType,
      searchText,
      searchResult,
      redirect,
      isLoading,
    } = this.state

    const { params } = this.props.match

    return (
      <Fragment>
        {redirect && <Redirect to={redirect} />}
        <MainContainer>
          <Header
            onChange={this.onChange}
            type={this.props.match.params.type}
          />
          {((searchType && searchText) || (this.searchType && this.searchText)) && (
            <SearchResult
              searchText={searchText || this.searchText}
              searchResult={searchResult}
              searchAlbums={this.searchAlbums}
              searchTracks={this.searchTracks}
              isLoading={isLoading}
            />
          )}
        </MainContainer>
      </Fragment>
    )
  }
}
