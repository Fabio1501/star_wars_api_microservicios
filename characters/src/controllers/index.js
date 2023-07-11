const {catchedAsync} = require("../utils")
const getCharacters = require("./getCharacters")
const createCharacter = require("./createCharacter")

module.exports = {
    getCharacters: catchedAsync(getCharacters),
    createCharacter: catchedAsync(createCharacter)
}
