const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const helmet = require("helmet");
require("dotenv").config();
require("./loaders/db")
const router = require("./routers/book")



const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(helmet());
app.use("/",router.router)



app.listen(process.env.PORT, ()=>{
    console.log("port is running on " + process.env.PORT);
})


