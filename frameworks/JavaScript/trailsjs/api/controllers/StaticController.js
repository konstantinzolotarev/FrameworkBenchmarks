'use strict'

const Controller = require('trails-controller')

/**
 * @module StaticController
 * @description Generated Trails.js Controller.
 */
module.exports = class StaticController extends Controller {

  json (req, res) {
    res.json({ message: 'Hello, World!' })
  }

  plainText (req, res) {
    res
      .header('Content-Type', 'text/plain')
      .send('Hello, World!')
  }
}
