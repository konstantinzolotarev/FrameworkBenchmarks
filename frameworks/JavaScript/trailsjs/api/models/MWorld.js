'use strict'

const Model = require('trails-model')

/**
 * @module MWorld
 * @description Mongoose World model
 */
module.exports = class MWorld extends Model {

  static config () {
    return {
      tableName: 'world',

      store: 'mongoose',

      schema: {
        collection: 'world'
      }
    }
  }

  static schema () {
    return {
      id: Number,
      randomNumber: Number
    }
  }
}
