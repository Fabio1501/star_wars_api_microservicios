const server = require("./src/server");
const PORT = 3004
const {Character, Film} = require("./src/database")

server.listen(PORT, () => {
    console.log(`Database service on PORT ${PORT}`);
})
