'use strict'

const mongoose = require('mongoose')
const Album = require('../../schema/albums')

const getAlbumsById = function (ids) {
    return new Promise((resolve, reject) => {
        console.log('AlbumRepository - getAlbumsById - begin')
        let idArray = []
        ids.forEach(id => {
            idArray.push(mongoose.Types.ObjectId(id))
        })
        Album.find({
            '_id': {
                $in: idArray
            }
        }, function (err, albums) {
            if (err) {
                console.log('AlbumRepository - getAlbumsById - error')
                reject(err)
            } else {
                console.log('AlbumRepository - getAlbumsById - end')
                resolve(albums)
            }
        })
    })
}

module.exports = getAlbumsById