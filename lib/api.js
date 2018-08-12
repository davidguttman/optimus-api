var send = require('send-data/json')
var optimus = require('optimus-y')

module.exports = {
  getSymbol
}

function getSymbol (req, res, opts, cb) {
  optimus({symbol: opts.params.symbol}, function (err, oData) {
    if (err) return cb(err)

    send(req, res, oData)
  })
}
