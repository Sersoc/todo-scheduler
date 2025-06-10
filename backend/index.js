const cors = require("cors");
const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

const app = express();
const signInRoute = require("./routes/signInRoute");
const loginRoute = require("./routes/loginRoute");

app.use(cors());
app.use(express.json());
app.use("/signin",signInRoute);
app.use("/login",loginRoute);
app.listen(port,()=>{
    console.log(`Listening : ${port}`)
});