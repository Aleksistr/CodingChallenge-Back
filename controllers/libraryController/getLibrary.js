'use strict'

const libraryServices = require('../../services/libraryServices')

const getLibrary = function(req, res, next) {
    console.log('LibraryController - getLibrary - begin')
    libraryServices.getLibrary().then((response) => {
        console.log('LibraryController - getLibrary - end')
        res.json(response)
    }).catch((err) => {
        console.log('LibraryController - getLibrary - error')
        res.json(err)
    })
}

module.exports = getLibrary