const spotifyApi = require('../../helpers/spotifyApi/spotifyApi')

const callback = function (req, res) {
    const error = req.query.error
        const code = req.query.code
        const state = req.query.state
      
        if (error) {
          console.error('Callback Error:', error)
          res.send(`Callback Error: ${error}`)
          return
        }
      
        spotifyApi
          .authorizationCodeGrant(code)
          .then(data => {
            const access_token = data.body['access_token']
            const refresh_token = data.body['refresh_token']
            const expires_in = data.body['expires_in']
      
            spotifyApi.setAccessToken(access_token)
            spotifyApi.setRefreshToken(refresh_token)
            res.send('Success! You can now close the window.')
      
            setInterval(async () => {
              const data = await spotifyApi.refreshAccessToken()
              const access_token = data.body['access_token']
      
              spotifyApi.setAccessToken(access_token)
            }, expires_in / 2 * 1000)
          })
          .catch(error => {
            console.error('Error getting Tokens:', error)
            res.send(`Error getting Tokens: ${error}`)
          })
}

module.exports = callback