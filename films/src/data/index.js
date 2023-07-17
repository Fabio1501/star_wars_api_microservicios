const films = require("./films.json")
const axios = require("axios")
module.exports = {
    list: async () => {
        let films = await axios("http://database:3004/Film")
        return films.data
    },
    create: async () => {
        throw Error("hay un error al momento de crear el personaje")
    }
}
