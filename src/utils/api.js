export class API {
  static CLIENTID = '616d1e4e411745de9d66a5563fde5fb8'
  static endpoint = 'https://api.spotify.com/v1/search'
}

var scopes = 'user-read-private user-read-email';
window.location = ('https://accounts.spotify.com/authorize' +
  '?response_type=code' +
  '&client_id=' + API.CLIENTID +
  (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
  '&redirect_uri=' + encodeURIComponent('localhost:3000'));
