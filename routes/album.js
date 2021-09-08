'use strict'

const express = require('express')
const router = express.Router()

const albumController = require('../controllers/albumController')

// Apis to get user token
router.put('/:albumId/fav-status', albumController.changeFavStatus)
router.put('/annotations', albumController.addAnnotationToAlbums)
router.delete('/annotations', albumController.deleteAnnotationFromAlbum)


module.exports = router