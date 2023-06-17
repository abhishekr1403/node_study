
const express = require('express')
const path = require('path')
const app = express()

app.get('/', function (req, res) {
    res.send("This is the Homepage")
})

/*app.use(function(req,res,next){
    console.log('middleware started working')
    next()
})*/

app.get('/signup', function (req, res,) {
    res.sendFile(path.join(__dirname, 'signupp.html'))
})

/*app.use(function(req,res,next){
    console.log('ended')
})*/

app.post('/signup', function(req,res,){
    res.send('Account created')
   
})

app.listen(3000, () =>  console.log("Server started"))