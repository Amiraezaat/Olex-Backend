require("dotenv").config()
const express = require('express')
 
const app = express()
const port = process.env.PORT
const Auth_Router = require("./Modules/Authentication/Auth.routes")
const User_Router = require("./Modules/User/User.routes")
const Product_Router = require("./Modules/Product/Product.routes")
const Comment_Router = require("./Modules/Comment/Comment.routes")
const socketInit = require('./Services/socket_init')
const cornJobs = require('./Services/Cron_job')
const logger = require("./Utils/logger")
const mongoose = require("mongoose")
app.use(express.json()) 
app.use("/uploads" , express.static("./uploads"))
 
console.log("Connected --💥💥-- connect to cloud DB");
mongoose.connect(process.env.CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

logger.dbConnection(mongoose);
app.use(Auth_Router , User_Router ,Product_Router , Comment_Router)
app.get('/', (req, res) => res.send('Hello World!'))
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
socketInit(server); //apply socket io on your server
cornJobs()