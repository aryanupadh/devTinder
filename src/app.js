const express = require("express")

const app = express()
let session = null

app.use((req, res, next)=>{
    console.log("entered middleware \-.-/")
    session = true
    next()
})

app.get('/about', (req,res)=>{
    res.send("ABOUT")
    console.log("Status About - "+session)
})

app.get('/home', (req,res)=>{
    res.send("HOME SWEET HOME...")
    console.log("Status Home - "+session)
})

app.listen(3000, ()=>{
    console.log("SERVER IS LISTENING ::: ")
})