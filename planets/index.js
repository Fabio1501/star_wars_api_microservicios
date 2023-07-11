const server = require("./src/server")
const PORT = 3003

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
