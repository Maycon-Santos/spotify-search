import { Authentication } from './authentication'

export class API {
  static clientID = '616d1e4e411745de9d66a5563fde5fb8'
  static baseURL = 'https://api.spotify.com/'

  static tokenURL = `${API.baseURL}authorize`
  static searchURL = `${API.baseURL}v1/search`

  static request (url, query = {}) {
    const formattedQuery = Object.keys(query).map((key, index) => {
      return `${index ? '&' : '?'}${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    }).join('')

    return fetch(`${url}${formattedQuery}`, {
      headers: {
        Authorization: `${Authentication.token.token_type} ${Authentication.token.access_token}`,
      },
    })
  }

  static async search (q, type) {
    return API.request(API.searchURL, { q, type })
  }

  static searchAlbums (artistID) {
    return API.request(`${API.baseURL}v1/artists/${artistID}/albums`, { limit: 3 })
  }

  static searchTracks (albumID) {
    return API.request(`${API.baseURL}v1/albums/${albumID}/tracks`)
  }
}
