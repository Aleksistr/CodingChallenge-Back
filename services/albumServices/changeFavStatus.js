'use strict'

const albumRepository = require('../../repository/albumRepository')

const changeFavStatus = function (albumId) {
    return new Promise((resolve, reject) => {
        console.log('AlbumServices - chnageFavStatus - begin')
        // Get the targetr album to update the fav status
        albumRepository.getAlbumById(albumId).then((album) => {
            // Test if album is not null
            if (album !== null) {
                // Update the favStatus from the album
                albumRepository.changeFavStatus(album).then((alb) => {
                    console.log('AlbumServices - changeFavStatus - end')
                    resolve(alb)
                }).catch((err) => {
                    console.log('AlbumServices - changeFavStatus - error - in album update')
                    reject(err)
                })
            } else {
                console.log('AlbumServies - changeFavStatus - error no album found')
                reject({
                    error: 'errors.album.not_found'
                })
            }
        }).catch((err) => {
            console.log('AlbumServices - changeFavStatus - error in album get')
            reject(err)
        })
    })
}

module.exports = changeFavStatus