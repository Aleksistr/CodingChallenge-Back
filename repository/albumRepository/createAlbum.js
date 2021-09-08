'use strict';

const Album = require('../../schema/albums');

const createAlbum = function (albumRequest) {
    return new Promise((resolve , reject) => {
        console.log('AlbumRepository - createAlbum - begin');
        // Create an new album
        let album = new Album ({
            name: albumRequest.name,
            img: albumRequest.img,
            spotifyId: albumRequest.id,
            annotations: []
        })
        // Save the album in database
        album.save(function (err, alb) {
            if (err) {
                console.log('AlbumRepository - createAlbum - error');
                reject(err);
            } else {
                console.log('AlbumRepository - createAlbum - end');
                resolve(alb);
            }
        })
    })
}

module.exports = createAlbum;