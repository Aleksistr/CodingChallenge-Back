'use strict'

const albumServices = require('../../services/albumServices')

const addAnnotationToAlbums = function (req, res, next) {
    console.log('AlbumController - addAnnotationToAlbum - begin')
    albumServices.addAnnotationToAlbums(req.body.albumsIds, req.body.annotation).then((response) => {
        console.log('AlbumController - addAnnotationToAlbums - end')
        res.json(response)
    }).catch((err) => {
        console.log('AlbumController - addAnnotationToAlbums - error')
        res.json(err)
    })
}

module.exports = addAnnotationToAlbums