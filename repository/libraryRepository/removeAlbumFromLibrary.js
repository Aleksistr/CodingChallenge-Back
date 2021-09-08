'use strict'

const removeAlbumFromLibrary = function (albumId, library) {
    return new Promise((resolve, reject) => {
        console.log('LibraryRepository - removeAlbumFromLibrary - begin')
        // Filter the library array to remove the album
        library.albums = library.albums.filter(album => album._id != albumId)
        library.save(function (err, lib) {
            if (err) {
                console.log('LibraryRepository - removeAlbumFromLibrary - error')
                reject(err)
            } else {
                console.log('LibraryRepository - removeAlbumFromLibrary - end')
                resolve(lib)
            }
        })
    })
}

module.exports = removeAlbumFromLibrary