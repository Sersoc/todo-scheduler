const cors = require("cors");
const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening : ${port}`)
});