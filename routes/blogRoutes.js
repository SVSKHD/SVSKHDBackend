const express = require ("express")
const server = express.Router()

server.get("/blog",(req,res)=>{
res.send({
    "Hello":"ass"
})
})
module.exports = server