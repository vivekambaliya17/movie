const express = require('express');
const conect = require('./confirg/connect');
const Router = require('./routes/route');
const app = express()
require('dotenv').config()
console.log(process.env.PORT)
app.use(express.json())
app.use("/",Router)
app.listen(8000,()=>{
    console.log(`port is running is `);
    conect()
})
