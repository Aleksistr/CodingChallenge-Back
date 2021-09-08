'use strict'

const albumRepository = require('../../repository/albumRepository')

const deleteAnnotationFromAlbum = function (albumId, annotation) {
    return new Promise((resolve, reject) => {
        // At first we will search the album
        albumRepository.getAlbumById(albumId).then((album) => {
            // Now we have to delete the album annotation
            albumRepository.removeAnnotation(album, annotation).then((album) => {
                console.log('AlbumServices - deleteAlbumAnnotation - end')
                resolve(album)
            }).catch((err) => {
                console.log('AlbumServices - deleteAlbumAnnotation - error in album update')
                reject(err)
            })
        }).catch((err) => {
            console.log('AlbumServices - deleteAlbumAnnotation - error in album get')
            reject(err)
        })
    })
}

module.exports = deleteAnnotationFromAlbum