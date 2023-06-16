var http = require("http")

http.createServer(function(req,res){
    res.write("This is the sample Node.js Server created by Abhishek")
    res.end()

}).listen(7000)

