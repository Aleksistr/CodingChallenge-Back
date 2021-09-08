'use strict'

const albumServices = require('../../services/albumServices')

const changeFavStatus = function (req, res, next) {
    console.log('AlbumController - changeFavStatus - begin');
    albumServices.changeFavStatus(req.params.albumId).then((response) => {
        console.log('AlbumController - changeFavStatus - end')
        res.json(response)
    }).catch((err) => {
        console.log('AlbumController - changeFavStatus - error')
        res.json(err)
    })
}

module.exports = changeFavStatus