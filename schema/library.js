const mongoose = require('mongoose')
const Schema = mongoose.Schema

const librarySchema = new Schema({
    albums: [
        {
            type: Schema.Types.ObjectId,
            ref: 'album'
        }
    ]
})

// Define autopopulate function 
const autopopulateAlbums = function (next) {
    this.populate('albums')
    next()
}

// Define when autopopulate datas
librarySchema.pre('find', autopopulateAlbums)
    .pre('findOne', autopopulateAlbums)

module.exports = mongoose.model('Library', librarySchema)