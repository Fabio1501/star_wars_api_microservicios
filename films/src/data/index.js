const films = require("./films.json")

module.exports = {
    list: async () => {
        return films;
    },
    create: async () => {
        throw Error("hay un error al momento de crear el personaje")
    }
}
