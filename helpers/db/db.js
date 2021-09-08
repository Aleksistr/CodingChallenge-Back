'use strict'
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

function connect () {
    const mongoUri = `mongodb://${process.env.dbhost}:${process.env.dbport}/${process.env.dbname}`
    return new Promise((resolve, reject) => {

        if (process.env.NODE_ENV === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose
            const mockgoose = new Mockgoose(mongoose)
            mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(mongoUri)
                        .then(() => {
                            console.log('successfully connected to the database')
                            resolve()
                        })
                        .catch((err) => {
                            console.log(`error connecting to the database: ${err}`)
                            reject(err)
                        })
                })
        } else {
            mongoose.connect(mongoUri)
                .then(() => {
                    console.log('successfully connected to the database')
                    resolve()
                })
                .catch((err) => {
                    console.log(`error connecting to the database: ${err}`)
                    reject(err)
                })
        }
    })
}

function close () {
    return mongoose.disconnect()
}

module.exports = { connect, close }