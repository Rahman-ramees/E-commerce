const express = require("express")
const app = express();
const mongoose = require("mongoose")
const model = require("./mongo")
const cors = require("cors")

mongoose.connect("mongodb://127.0.0.1:27017/API").then(()=>{
    app.listen(3000, ()=>{
        console.log("listening");
    })
})

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:"*"
}))

app.get("/API", async (req,res)=>{
    const products = await model.find();
    res.send(products)
})