const express = require("express")
const morgan = require("morgan")
const { createProxyMiddleware} = require("http-proxy-middleware")

const server = express()
const PORT = 3000

server.use(morgan("dev"))
server.use("/characters", createProxyMiddleware({
    target: "http://characters:3001",
    changeOrigin: true
}))

server.use("/films", createProxyMiddleware({
    target: "http://films:3002",
    changeOrigin: true
}))

server.use("/planets", createProxyMiddleware({
    target: "http://planets:3003",
    changeOrigin: true
}))

server.use("/database", createProxyMiddleware({
    target: "http://database:3004",
    changeOrigin: true
}))

server.listen(PORT, () => {
    console.log("Gateway run on port ", PORT);
})

module.exports = server
