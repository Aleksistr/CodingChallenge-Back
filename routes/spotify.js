'use strict'

const express = require('express')
const router = express.Router()

const middleware = require('../helpers/middleware') 
const spotifyController = require('../controllers/spotifyController')

// Apis to get user token
router.get('/login', spotifyController.login)
router.get('/callback', spotifyController.callback)

router.get('/search', middleware.isValidToken, spotifyController.search)

module.exports = router