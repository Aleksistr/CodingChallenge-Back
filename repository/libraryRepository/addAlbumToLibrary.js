'use strict'

const addAlbumToLibrary = function (library, album) {
    return new Promise((resolve, reject) => {
        console.log('LibraryRepository - addAlbumToLibrary - begin')
        // Push the album inside the library album's list
        library.albums.push(album);
        // save the library now
        library.save(function (err, lib) {
            if (err) {
                console.log('LibraryRepository - addAlbumToLibrary - error')
                reject(err)
            } else {
                console.log('LibraryRepository - addAlbumToLibrary - end');
                resolve(lib)
            }
        })
    })
}

module.exports = addAlbumToLibrary