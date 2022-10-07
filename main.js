const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")

const marble = createMarble("gigantic")
const bag = weaveBag("marbled")
console.log(bag)
console.log(marble)