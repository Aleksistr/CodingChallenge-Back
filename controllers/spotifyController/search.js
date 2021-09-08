'use strict'

const spotifyServices = require('../../services/spotifyServices')

const search = function (req, res, next) {
    console.log('SpotifyController - search - begin')
    spotifyServices.search(req.query.search).then((response) => {
        console.log('SpotifyController - search - end')
        res.json(response)
    }).catch((err) => {
        console.log('SpotifyController - search - error')
        res.json(err)
    })
}

module.exports = search