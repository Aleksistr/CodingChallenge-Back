'use strict'

const libraryServices = require('../../services/libraryServices')

const addAlbumToLibrary = function (req, res, next) {
    console.log('LibraryController - addAlbumToLibrary - begin')
    libraryServices.addAlbumToLibrary(req.body.album).then((lib) => {
        console.log('LibraryController - addAlbumToLibrary - end')
        res.json({
            message: 'messages.add_album_to_library.success',
            data: lib
        })
    }).catch((err) => {
        console.log('LibraryController - addAlbumToLibrary - error')
        res.json(err)
    })
}

module.exports = addAlbumToLibrary