const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    isFav: {
        type: Boolean,
        default: false,
        required: true
    },
    annotations: [
        {
            type: String,
            required: false
        }
    ],
    spotifyId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('album', albumSchema)