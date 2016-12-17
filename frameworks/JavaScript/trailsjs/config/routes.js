/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/json',
    handler: 'StaticController.json'
  },

  {
    method: [ 'GET' ],
    path: '/plaintext',
    handler: 'StaticController.plainText'
  },

  {
    method: [ 'GET' ],
    path: '/mongoose',
    handler: 'MongooseController.mongoose'
  }
]
