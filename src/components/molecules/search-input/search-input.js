import React, { Component } from 'react'

import { InputContainer, InputText } from './search-input.styled'

export class SearchInput extends Component {
  state = {
    isFocused: false,
  }

  inputTextRef = null

  onFocus = () => {
    this.setState({ isFocused: true })
  }

  onBlur = () => {
    this.setState({ isFocused: false })
  }

  componentDidMount () {
    this.inputTextRef.addEventListener('focus', this.onFocus)
    this.inputTextRef.addEventListener('blur', this.onBlur)
  }

  render () {
    const { isFocused } = this.state

    return (
      <InputContainer isFocused={isFocused}>
      <InputText
        ref={ref => this.inputTextRef = ref}
        isFocused={isFocused}
        placeholder="O que procura?"
      />
      </InputContainer>
    )
  }
}
