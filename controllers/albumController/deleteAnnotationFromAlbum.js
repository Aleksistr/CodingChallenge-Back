'use strict'

const albumServices = require('../../services/albumServices')

const deleteAnnotationFromAlbum = function (req, res, next) {
    console.log('AlbumController - addAnnotationToAlbum - begin')
    albumServices.deleteAnnotationFromAlbum(req.body.albumId, req.body.annotation).then((response) => {
        console.log('AlbumController - deleteAnnotationFromAlbum - end')
        res.json(response)
    }).catch((err) => {
        console.log('AlbumController - deleteAnnotationFromAlbum - error')
        res.json(err)
    })
}

module.exports = deleteAnnotationFromAlbum