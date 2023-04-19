const cq = require('console-questions')
const ending = () => {
  console.log("Great!")
  process.exit()
}
const event = cq.ask("WTF?", { callback: ending })
console.log(event)
