import React, { Component } from 'react'

import { Container } from './search-option.styled'

export class SearchOption extends Component {
  render () {
    return (
      <Container checked={this.props.checked}>
        <input
          type="radio"
          name="search-option"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        {this.props.children}
      </Container>
    )
  }
}
