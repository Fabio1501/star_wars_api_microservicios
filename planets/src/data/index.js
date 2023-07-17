const planets = require("./planets.json")
const axios = require("axios")
module.exports = {
    list: async () => {
        let planets = await axios("http://database:3004/Planet")
        return planets.data
    },
    create: async () => {
        throw Error("hay un error al momento de crear el personaje")
    }
}
