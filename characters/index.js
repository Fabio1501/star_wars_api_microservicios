const server = require("./src/server")
const PORT = 3001

server.listen(PORT, () => console.log(`server listen on port ${PORT}`))
