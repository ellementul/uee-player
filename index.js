const { Player } = require('./src/index')

module.exports = { 
  Player,
  events: {
    wait: require('./events/wait_event')
  }
}