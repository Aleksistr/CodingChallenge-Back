'use strict'

const libraryRepository = require('../../repository/libraryRepository')
const albumRepository = require('../../repository/albumRepository')

const removeAlbumFromLibrary = function (albumId) {
    return new Promise((resolve, reject) => {
        console.log('LibraryServices - removeAlbumFromLibrary - begin')
        // At first we get the library
        libraryRepository.getOrCreateLibrary().then((library) => {
            // Now remove the album from the library
            libraryRepository.removeAlbumFromLibrary(albumId, library).then(() => {
                // Now delete the album
                albumRepository.deleteAlbum(albumId).then(() => {
                    console.log('LibraryServices - removeAlbumFromLibrary - end')
                    resolve(true)
                }).catch((err) => {
                    console.log('LibraryServices - removeAlbumFromLibrary - error in delete album')
                    reject(err)    
                })
            }).catch((err) => {
                console.log('LibraryServices - removeAlbumFromLibrary - error in remove album from library')
                reject(err)
            })
        }).catch((err) => {
            console.log('LibraryServices - removeAlbumFromLibrary - error in library get')
            reject(err)
        })
    })
}

module.exports = removeAlbumFromLibrary