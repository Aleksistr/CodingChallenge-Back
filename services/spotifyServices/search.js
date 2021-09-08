'use strict'
const spotifyApi = require('../../helpers/spotifyApi/spotifyApi')

const search = function (search) {
    return new Promise((resolve, reject) => {
        console.log('SpotifyServices - search - begin')
        spotifyApi.search(search, ['album'], { limit: 20, offset: 0}).then((response) => {
            getIdArray(response.body.albums.items).then((ids) => {
                spotifyApi.getAlbums(ids).then((response) => {
                    buildAlbumArray(response.body.albums).then((albums) => {
                        console.log('SpotifyServices - search - end')
                        resolve(albums)
                    })
                })
            })             
        }).catch((err) => {
            console.log('SpotifyServices - search - error' + err)
            spotifyApi.resetAccessToken()
            reject(err)
        })
    })
}

const getIdArray = function (albumList) {
    return new Promise ((resolve, reject) =>  {
        let ids = []
        albumList.forEach((album) => {
            ids.push(album.id)
        })
        let idArray = Promise.all(ids)
        resolve(idArray)
    })
}

const buildAlbumArray = function (albumList) {
    return new Promise((resolve, reject) => {
        let albums = []
        albumList.forEach((album) =>  {
            let totalDuration = 0
            album.tracks.items.forEach(track => {
                totalDuration += track.duration_ms
            })
            albums.push({
                img: album.images[0].url,
                name: album.name,
                id: album.id,
                date: album.release_date,
                date_precision: album.release_date_precision,
                duration: totalDuration
            })
        })
        let albumArray = Promise.all(albums)
        resolve(albumArray)
    })
}

module.exports = search


