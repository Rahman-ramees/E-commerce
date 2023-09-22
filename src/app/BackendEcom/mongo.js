const mongoose = require("mongoose")

const connection = mongoose.model("",

new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String
}),"ProductsApi"

)
module.exports = connection
