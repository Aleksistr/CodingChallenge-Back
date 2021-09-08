'use strict'

const addAnnotationToAlbum = function(album, annotation) {
    return new Promise((resolve, reject) => {
        console.log('AlbumRepository - addAnnotationToAlbum - begin')
        // Add annotation to album
        album.annotations.push(annotation)
        album.save(function (err, album) {
            if (err) {
                console.log('AlbumRepository - addAnnotationToAlbum - error')
                reject(err)
            } else {
                console.log('AlbumRepository - addAnnotationToAlbum - end')
                resolve(album)
            }
        })
    })
}

module.exports = addAnnotationToAlbum