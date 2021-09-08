'use strict'

const Album = require('../../schema/albums')

const getAlbumById = function (id) {
    return new Promise((resolve, reject) => {
        console.log('AlbumRepository - getAlbumById - begin')
        Album.findById(id, function (err, album) {
            if (err) {
                console.log('AlbumRepository - getAlbumById - error')
                reject(err)
            } else {
                console.log('AlbumRepository - getAlbumById - end')
                resolve(album)
            }
        })
    })
}

module.exports = getAlbumById