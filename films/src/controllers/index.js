const {catchedAsync} = require("../utils")
const getFilms = require("./getFilms")
const createFilm = require("./createFilm")

module.exports = {
    getFilms: catchedAsync(getFilms),
    createFilm: catchedAsync(createFilm) 
}
