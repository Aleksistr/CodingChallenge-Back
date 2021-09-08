'use strict'

const libraryRepository = require('../../repository/libraryRepository')

const getLibrary = function () {
    return new Promise((resolve, reject) => {
        console.log('LibraryServices - getLibrary - begin');
        libraryRepository.getOrCreateLibrary().then((library) => {
            console.log('LibraryServices - getLibrary - end');
            resolve({
                library: library
            })
        }).catch((err) => {
            console.log('LibraryServices - getLibrary - error')
            reject(err)
        })
    })
}

module.exports = getLibrary