
/**
 * Module dependencies.
 */

 const app = require('../app')
 const debug = require('debug')('family-engine')
 const http = require('http')
 const db = require('../helpers/db/db')
 
 /**
  * Get port from environment and store in Express.
  */
 
 var port = normalizePort(process.env.PORT || '3000')
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 
 db.connect()
     .then(() => {
        app.listen(port)
        app.on('listening', onListening)
     })
 
 /**
  * Normalize a port into a number, string, or false.
  */
 
 function normalizePort(val) {
     var port = parseInt(val, 10)
 
     if (isNaN(port)) {
         // named pipe
         return val
     }
 
     if (port >= 0) {
         // port number
         return port
     }
 
     return false
 }
 
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
     var addr = server.address()
     var bind = typeof addr === 'string'
         ? 'pipe ' + addr
         : 'port ' + addr.port
     debug('Listening on ' + bind)
 
 }