const express = require("express")

const app = express()

app.use('/home', (req,res)=>{
    res.send("HOME SCREEEN")
})

app.use('/about', (req,res)=>{
    res.send("ABOUTTT")
})

app.use('/', (req,res)=>{
    res.send("It worksss.......")
})

app.listen(3000,()=>{
    console.log("Server is listening")
})