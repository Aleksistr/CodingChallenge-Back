const spotifyApi = require('../spotifyApi/spotifyApi')

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
]

const isValidToken = function (req, res, next) {
    console.log('Middleware - isValidToken - begin')
    // Test if the spotify Api have good credentials
    if (typeof spotifyApi.getAccessToken() !== 'undefined') {
         next()
    } else {
        res.json({
            error: 'invalid_token',
            redirect_uri: spotifyApi.createAuthorizeURL(scopes)
        })
    }
    // next()
}

module.exports = isValidToken