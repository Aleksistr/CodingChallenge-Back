'use strict'

const Library = require('../../schema/library')

const getOrCreateLibrary = function () {
    return new Promise((resolve, reject) => {
        console.log('LibraryRepository - getOrCreateLibrary - begin')
        Library.findOne().then((lib) => {
            if (lib === null) {
                let library = new Library({
                    albums: []
                })
                library.save(function (err, newLib) {
                    if (err) {
                        console.log('LibraryRepository - getOrCreateLibrary - error in library creation')
                        reject(err)
                    } else {
                        console.log('LibraryRepository - getOrCreateLibrary - end - library created')
                        resolve(newLib)
                    }
                })
            } else {
                console.log('LibraryRepository - getOrCreateLibrary - end - library get')
                resolve(lib)
            }
        })
    })
}

module.exports = getOrCreateLibrary