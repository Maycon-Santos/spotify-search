import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { Container, LoginButton } from './login.styled'

import { Authentication } from '../../../utils/authentication'

import SpotifyLogo from '../../../assets/images/spotify-logo.svg'

export class Login extends Component {
  constructor (props) {
    super(props)
    Authentication.login()
  }

  render () {
    if (Authentication.logged) {
      return <Redirect to="/search" />
    }

    return (
      <Container>
        <LoginButton onClick={Authentication.requestCode}>
          <img src={SpotifyLogo} alt="Spotify Logo" />
          Conectar via Spotify
        </LoginButton>
      </Container>
    )
  }
}
