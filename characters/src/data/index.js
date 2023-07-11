// const characters = require("./characters.json")
const axios = require("axios")

module.exports = {
    list: async () => {
        let characters = await axios("http://database:3004/Character")
        return characters.data
    },
    create: async () => {
        throw Error("hay un error al momento de crear el personaje")
    }
}
