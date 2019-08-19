import React, { Component } from 'react'

import { HeaderContainer } from './header.styled'

import { SearchInput } from '../../molecules/search-input'
import { SearchOption } from '../../molecules/search-option'

export class Header extends Component {
  options = [
    {
      label: 'Música',
      searchType: 'track',
    },
    {
      label: 'Álbum',
      searchType: 'album',
    },
    {
      label: 'Artista',
      searchType: 'artist',
    },
  ]

  state = {
    searchType: this.getOptionIndex(this.props.type) || 0,
  }

  componentDidMount () {
    const { searchType } = this.state
    this.onChange({ defaultSearchType: this.options[searchType].searchType })
  }

  getOptionIndex (type) {
    for (let index = 0; index < this.options.length; index++) {
      const option = this.options[index]
      if (option.searchType === type) {
        return index
      }
    }
  }

  onChange = ({ searchText, searchType, defaultSearchType }) => {
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange({ searchText, searchType, defaultSearchType })
    }
  }

  searchInputOnChange = searchText => this.onChange({ searchText })

  chooseOption = index => {
    return e => {
      if (e.target.checked) {
        this.setState({ searchType: index }, () => {
          this.onChange({ searchType: this.options[index].searchType })
        })
      }
    }
  }

  render () {
    const { searchType } = this.state
    return (
      <HeaderContainer>
        <SearchInput onChange={this.searchInputOnChange} />
        {this.options.map((option, index) => (
          <SearchOption
            key={option.searchType}
            checked={searchType === index}
            onChange={this.chooseOption(index)}
          >
            {option.label}
          </SearchOption>
        ))}
      </HeaderContainer>
    )
  }
} 
