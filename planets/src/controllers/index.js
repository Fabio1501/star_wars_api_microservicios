const {catchedAsync} = require("../utils")
const getPlanets = require("./getPlanets")
const createPlanet = require("./createPlanet")

module.exports = {
    getPlanets: catchedAsync(getPlanets),
    createPlanet: catchedAsync(createPlanet)
}
