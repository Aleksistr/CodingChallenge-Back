'use strict'

const Album = require('../../schema/albums')

const getAlbumBySpotifyId = function (spotifyId) {
    return new Promise((resolve, reject) => {
        console.log('AlbumRepository - getAlbumBySpotifyId - begin')
        Album.findOne({spotifyId: spotifyId}, function (err, album) {
            if (err) {
                console.log('AlbumRepository - getAlbumBySpotifyId - error')
                reject(err)
            } else {
                console.log('AlbumRepository - getAlbumBySpotifyId - end')
                resolve(album)
            }
        })
    })
}

module.exports = getAlbumBySpotifyId