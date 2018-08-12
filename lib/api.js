var send = require('send-data/json')
var optimus = require('optimus-y')
var AsyncCache = require('async-cache')

var cache = new AsyncCache({
  maxAge: 10 * 60 * 1000,
  load: function (symbol, cb) {
    optimus({symbol}, cb)
  }
})

module.exports = {
  getSymbol
}

function getSymbol (req, res, opts, cb) {
  cache.get(opts.params.symbol, function (err, oData) {
    if (err) return cb(err)

    send(req, res, oData)
  })
}
