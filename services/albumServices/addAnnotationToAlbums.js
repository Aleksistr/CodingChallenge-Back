'use strict'

const { response } = require('express')
const albumRepository = require('../../repository/albumRepository')

const addAnnotationToAlbums = function (albumsIds, annotation) {
    return new Promise((resolve, reject) => {
        console.log('AlbumServices - addAnnotationToAlbums - begin')
        // At first we have to get the album list by there ids
        albumRepository.getAlbumsById(albumsIds).then((albums) => {
            let updatedAlbum = []
            albums.forEach(album => {
                albumRepository.addAnnotationToAlbum(album, annotation).then((alb) => {
                    updatedAlbum.push(alb)
                }).catch((err) => {
                    console.log('AlbumServices - addAnnotationToAlbums - error in album update')
                    reject(err)
                })
                let updatedAlbums = Promise.all(updatedAlbum)
                console.log('AlbumServices - addAnnotationToAlbums - end')
                resolve(updatedAlbums)
            })
        }).catch((err) => {
            console.log('AlbumServices - addAnnotationToAlbums - error in album list get', err)
            reject(err)
        })

    })
}

module.exports = addAnnotationToAlbums