'use strict'

const libraryServices = require('../../services/libraryServices')

const removeAlbumFromLibrary = function (req, res, next) {
    console.log('LibraryController - removeAlbumFromLibrary - begin')
    libraryServices.removeAlbumFromLibrary(req.params.albumId).then(() => {
        console.log('LibraryController - removeAlbumFromLibrary - end')
        res.json({
            message: 'messages.library.album_deleted'
        })
    }).catch((err) => {
        console.log('LibraryController - removeAlbumFromLibrary - err')
        res.json(err)
    })
}

module.exports = removeAlbumFromLibrary