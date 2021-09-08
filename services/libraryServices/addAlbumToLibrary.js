'use strict'

const albumRepository = require('../../repository/albumRepository')
const libraryRepository = require('../../repository/libraryRepository')

const addAlbumToLibrary = function (album) {
    return new Promise((resolve, reject) => {
        console.log('LibraryServices - addAlbumToLibrary - begin')
        // Get or create the library if it does'nt exist
        libraryRepository.getOrCreateLibrary().then((lib) => {
            // Now we have the library, we can check if we can add the album to the library
            albumRepository.getAlbumBySpotifyId(album.id).then((alb) => {
                // If album already exist in database it meas that it is already in library
                if (alb !== null) {
                    console.log('LibraryServices - addAlbumToLibrary - end - album already in library')
                    reject({
                        error: 'errors.add_album.already_in_library'
                    })
                } else {
                    // We create the album
                    albumRepository.createAlbum(album).then((newAlbum) => {
                        libraryRepository.addAlbumToLibrary(lib, newAlbum).then((lib) => {
                            console.log('LibraryRepository - addAlbumToLibrary - end')
                            resolve(lib);
                        })
                    }).catch((err) => {
                        console.log('LibraryServices - addAlbumToLibrary - error in album creation')
                        reject(err)
                    })
                }
            }).catch((err) => {
                console.log('LibraryServices - addAlbumToLibrary - error in getAlbum method')
                reject(err)
            })
        }).catch((err) => {
            console.log('LibraryServices - addAlbumToLibrary - error in getOrCreateLibrary')
            reject(err)
        })
    })
}

module.exports = addAlbumToLibrary