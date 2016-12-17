'use strict'

const Controller = require('trails-controller')

/**
 * @module MongooseController
 * @description Generated Trails.js Controller.
 */
module.exports = class MongooseController extends Controller {


  mongoose(req, res) {
    let queries = isNaN(req.query.queries) ? 1 : parseInt(req.query.queries, 10)
    const queryFunctions = []

    queries = Math.min(Math.max(queries, 1), 500)

    for (let i = 1; i <= queries; i++) {
      queryFunctions.push(this.app.orm.MWorld
        .findOne({
          id: (Math.floor(Math.random() * 10000) + 1)
        })
        .exec())
    }

    Promise.all(queryFunctions)
      .then((results) => {
        if (!req.query.queries) {
          results = results[0]
        }
        res.send(results)
      })
      .catch(() => {
        res.sendStatus(500)
      })
  }

  fortune(req, res) {
    this.app.orm.MFortune
      .find({})
      .exec()
      .then((fortunes) => {
        const newFortune = {
          id: 0,
          message: 'Additional fortune added at request time.'
        }
        fortunes.push(newFortune)
        fortunes.sort(function(a, b) {
          return (a.message < b.message) ? -1 : 1
        })

        res.render('fortunes', {
          fortunes: fortunes
        })
      })
      .catch((err) => {
        res.sendStatus(500)
      })
  }

  update(req, res) {
    let queries = isNaN(req.query.queries) ? 1 : parseInt(req.query.queries, 10)
    const selectFunctions = []

    queries = Math.min(queries, 500)

    for (let i = 1; i <= queries; i++) {
      selectFunctions.push(
        this.app.orm.MWorld.findOne({
          id: Math.floor(Math.random() * 10000) + 1
        }).exec()
      )
    }

    Promise
      .all(selectFunctions)
      .then((worlds) => {
        const updateFunctions = []

        for (let i = 0; i < queries; i++) {
          (function(i) {
            worlds[i].randomNumber = Math.ceil(Math.random() * 10000)
            updateFunctions.push(
              this.app.orm.MWorld.update({
                id: worlds[i]
              }, {
                randomNumber: worlds[i].randomNumber
              })
            )
          }.bind(this))(i)
        }

        return Promise.all(updateFunctions)
          .then((err, updates) => {
            res.send(worlds)
          })
      })
      .catch((err) => {
        res.sendStatus(500)
      })
  }
}
