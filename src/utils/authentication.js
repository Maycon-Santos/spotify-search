import { API } from './api'

export class Authentication {
  static tokenKey = 'token'
  static token = JSON.parse(localStorage.getItem(Authentication.tokenKey) || '{}')

  static get logged () {
    return !!(
      localStorage.getItem(Authentication.tokenKey) &&
      localStorage.getItem(Authentication.tokenKey) !== "null"
    )
  }

  static requestCode () {
    const scopes = 'user-read-private user-read-email';
    const url = `
      https://accounts.spotify.com/authorize
        ?response_type=token
        &client_id=${API.clientID}
        &scope=${encodeURIComponent(scopes)}
        &redirect_uri=${window.location.origin}
    `
    window.location = url.replace(/\s+/g, '')
  }

  static login () {

    const hashParameters = Object.fromEntries(
      window
        .location
        .hash
        .substr(1)
        .split('&')
        .map(fragment => fragment.split('='))
    )

    if (
      Object.keys(hashParameters)
      .includes('access_token', 'token_type', 'expires_in')
    ) {
      hashParameters.expires_in = new Date().getTime() + (hashParameters.expires_in * 1000)
      Authentication.token = hashParameters
      localStorage.setItem(
        Authentication.tokenKey,
        JSON.stringify(hashParameters)
      )
    }
  }

  static logout () {
    localStorage.removeItem(Authentication.tokenKey)
  }
}

async function tokenExpires () {
  const token = JSON.parse(localStorage.getItem(Authentication.tokenKey) || '{}')
  const currentDate = new Date().getTime()

  if (token && token.expires_in <= currentDate) {
    localStorage.removeItem(Authentication.tokenKey)
    document.location.href= '/'
  }

  setTimeout(tokenExpires, 1000)
}

tokenExpires()
