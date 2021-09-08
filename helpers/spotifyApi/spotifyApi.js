const SpotifyWebApi = require('spotify-web-api-node')
const dotenv = require('dotenv')
dotenv.config()

const spotifyApi = new SpotifyWebApi({
  clientId: '****',
  clientSecret: '****',
  redirectUri: 'http://localhost:3000/v1/spotify/callback'
})

module.exports = spotifyApi