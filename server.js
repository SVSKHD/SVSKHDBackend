const express = require("express")
const bodyParser = require("body-parser")
const cookierParser = require("cookie-parser")
const mongoose = require("mongoose")
const morgan = require("morgan")
const Cors = require("cors")
require("dotenv").config()

// server variable
const server = express()

// server middlewares
server.use(bodyParser.json())
server.use(cookierParser())
server.use(Cors)

mongoose
    .connect(process.env.DATABASE_LOCAL, { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: true,
        useUnifiedTopology:true
     })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log(err);
    });


// routes variables
const BlogRoutes = require("./routes/blogRoutes")
// const AuthRoutes = require("./routes/AuthRoutes")
// const CategoryRoutes = require("./routes/CategoryRoutes")
// const TagRoutes = require("./routes/TagRoutes")
// const FormRoutes = require("./routes/FormRoutes")
// const SubscribeRoutes = require("./routes/SubscribeRoutes")


// route middleware
server.use("/api" , BlogRoutes)
// server.use("/api" , AuthRoutes)
// server.use("/api" , CategoryRoutes)
// server.use("/api" , TagRoutes)
// server.use("/api" , FormRoutes)
// server.use("/api" , SubscribeRoutes)

const PORT = process.env.PORT 

server.listen(PORT , ()=>{
    console.log(`Server is up and running at ${PORT}`)
})