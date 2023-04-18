const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.DB)
let conect = async()=>{
    try {
        console.log("running");
        await mongoose.connect(process.env.DB)
        console.log("conect")
    } catch (error) {
        console.log(error)
    }
}
module.exports = conect