import React, { Component } from 'react'

import { HeaderContainer } from './header.styled'

import { SearchInput } from '../../molecules/search-input'
import { SearchOption } from '../../molecules/search-option'

export class Header extends Component {
  state = {
    searchBy: 0,
  }

  options = [
    {
      label: 'Álbum',
      searchBy: 'album',
    },
    {
      label: 'Artista',
      searchBy: 'artist',
    },
    {
      label: 'Música',
      searchBy: 'music',
    }
  ]

  chooseOption = index => {
    return e => {
      if (e.target.checked) {
        this.setState({ searchBy: index })
      }
    }
  }

  render () {
    const { searchBy } = this.state
    return (
      <HeaderContainer>
        <SearchInput />
        {this.options.map((option, index) => (
          <SearchOption
            key={option.searchBy}
            checked={searchBy === index}
            onChange={this.chooseOption(index)}
          >
            {option.label}
          </SearchOption>
        ))}
      </HeaderContainer>
    )
  }
} 
