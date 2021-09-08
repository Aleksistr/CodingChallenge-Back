'use strict'

const express = require('express')
const router = express.Router()

const libraryController = require('../controllers/libraryController')

// Apis to get user token
router.post('/addAlbum', libraryController.addAlbumToLibrary)
router.get('', libraryController.getLibrary)
router.delete('/album/:albumId', libraryController.removeAlbumFromLibrary)

module.exports = router