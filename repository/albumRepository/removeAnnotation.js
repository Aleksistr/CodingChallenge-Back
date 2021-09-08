'use strict'

const removeAnnotation = function (album, annotation) {
    return new Promise((resolve, reject) => {
        console.log('AlbumRepository - removeAlbumAnnotation - begin')
        album.annotations = album.annotations.filter(tag => tag != annotation)

        album.save(function (err, alb) {
            if (err) {
                console.log('AlbumRepository - removeAlbumAnnotation - error', err)
                reject(err)
            } else {
                console.log('AlbumRepository - removeAlbumAnnotation - end')
                resolve(alb)
            }
        })
    })
}

module.exports = removeAnnotation