'use strict'

const changeFavStatus = function (album) {
    return new Promise ((resolve, reject) => {
        console.log('AlbumRepository - changeFavStatus - begin')
        album.isFav = !album.isFav
        album.save(function (err, alb) {
            if (err) {
                console.log('AlbumRepository - changeFavStatus - error', err)
                reject(err)
            } else {
                console.log('AlbumRepository - changeFavStatus - end')
                resolve(alb)
            }
        })
    })
}

module.exports = changeFavStatus