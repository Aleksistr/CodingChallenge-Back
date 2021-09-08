'use strict'

const Album = require('../../schema/albums')

const deleteAlbum = function (albumId) {
    return new Promise((resolve, reject) => {
        console.log('AlbumRepository - deleteAlbum - begin')
        Album.deleteOne({_id: albumId}, function (err) {
            if (err) {
                console.log('AlbumRepository - deleteAlbum - error')
                reject(err)
            } else {
                console.log('AlbumRepository - deleteAlbum - end')
                resolve(true)
            }
        })
    })
}

module.exports = deleteAlbum