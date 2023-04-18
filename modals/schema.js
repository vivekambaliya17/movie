const mongoose = require('mongoose')

const movies = new mongoose.Schema({
    title:String,
    poster:String,
    year:Number,
    rating:Number,
    Director:String,
    durection:Number
})
let moviesSchema = mongoose.model("movies",movies)
module.exports=moviesSchema