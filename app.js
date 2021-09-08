const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

// Import routers
const spotifyRouter = require('./routes/spotify')
const libraryRouter = require('./routes/library')
const albumRouter = require('./routes/album')


// Init the app
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// Define witch router use for witch basePath
app.use('/v1/spotify', spotifyRouter)
app.use('/v1/library', libraryRouter)
app.use('/v1/albums', albumRouter)

// Export the app
module.exports = app