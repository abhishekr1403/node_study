let http = require("http")
let fs = require("fs")
let url = require('url')


http.createServer(function (req, res) {


    var q=url.parse(req.url,'true')
    //console.log(q.pathname)

    if (q.pathname === '/') {

        fs.readFile("sample.html", function (err, data) {

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()

        })
    } else if (q.pathname === '/signup') {
       
        fs.readFile('signupp.html', function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })

    } else if (q.pathname === '/signupaction') {

        //console.log(q.query)
        res.write('<h1>'+q.query.firstName+'</h1>')
        res.end()
        
    }else {

        fs.readFile('mock.html', function(err, data){
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }



}).listen(7000, function () {
    console.log("Server started")
})