import React, { Component } from 'react'

import {
  Container,
  SearchText,
  ResultContainer,
  ResultList,
  ResultItem,
  NoResults,
} from './search-result.styled'

import placeholderImage from '../../../assets/images/placeholder.png'

export class SearchResult extends Component {
  renderNoResults = () => {
    return (
      <NoResults>Sem resultados 😞</NoResults>
    )
  }

  renderTracks = () => {
    const { searchResult } = this.props
    return searchResult.tracks && (
      searchResult.tracks.items.length && (
        <ResultList>
          {searchResult.tracks.items.map(track => {
            const images = searchResult.tracks.images || track.album.images
            return (
              <ResultItem key={track.id}>
                <div className="album-image">
                  {
                    images[1] ? (
                      <img src={images[1].url} alt="" />
                    ) : (
                      <img src={placeholderImage} alt="" />
                    )
                  }
                </div>
                <div className="info">
                  <span className="name">{track.name}</span>
                  <span className="track-artists">
                    {track.artists.map((artist, index) => (
                      `${index ? ' & ' : ''}${artist.name}`
                    ))}
                  </span>
                  <span className="track-duration">
                    {String(((track.duration_ms / 1000) / 60).toFixed(2)).replace('.', ':')} minutos
                  </span>
                </div>
              </ResultItem>
            )
          })}
        </ResultList>
      ) || this.renderNoResults()
    )
  }

  renderAlbum = () => {
    const { searchResult, searchTracks } = this.props
    return searchResult.albums && (
      searchResult.albums.items.length && (
        <ResultList>
          {searchResult.albums.items.map(album => {
            return (
              <ResultItem key={album.id} onClick={searchTracks(album.id, album.images)}>
                <div className="album-image">
                  {
                    album.images[1] ? (
                      <img src={album.images[1].url} alt="" />
                    ) : (
                      <img src={placeholderImage} alt="" />
                    )
                  }
                </div>
                <div className="info">
                  <span className="name">{album.name}</span>
                  <span className="track-artists">
                    {album.artists.map((artist, index) => (
                      `${index ? ' & ' : ''}${artist.name}`
                    ))}
                  </span>
                </div>
              </ResultItem>
            )
          })}
        </ResultList>
      ) || this.renderNoResults()
    )
  }

  renderArtist = () => {
    const { searchResult, searchAlbums } = this.props
    return searchResult.artists && (
      searchResult.artists.items.length && (
        <ResultList>
          {searchResult.artists.items.map(artist => {
            return (
              <ResultItem key={artist.id} onClick={searchAlbums(artist.id)}>
                <div className="album-image">
                  {
                    artist.images[1] ? (
                      <img src={artist.images[1].url} alt="" />
                    ) : (
                      <img src={placeholderImage} alt="" />
                    )
                  }
                </div>
                <div className="info">
                  <span className="name">{artist.name}</span>
                  <span className="popularity">Popularidade: <b>{artist.popularity}</b></span>
                </div>
              </ResultItem>
            )
          })}
        </ResultList>
      ) || this.renderNoResults()
    )
  }

  render () {
    return (
      <Container>
        <SearchText>{this.props.searchText}</SearchText>
        <ResultContainer isLoading={this.props.isLoading}>
          {this.renderTracks()}
          {this.renderAlbum()}
          {this.renderArtist()}
        </ResultContainer>
      </Container>
    )
  }
}
