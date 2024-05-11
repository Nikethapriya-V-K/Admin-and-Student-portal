//var exp=require("express")
//var cors=require("cors")
var http=require("http")
var url=require('url')
var database=require('./database6')
const { verify } = require("crypto")

//var app=exp()
/*app.post("/course",(req,res)=>{
    console.log("Port is verified")
}).listen(4680)
console.log("port  listen 4680")*/
http.createServer(async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    res.setHeader('Access-Control-Max-Age',2592000)
    console.log(res.url)
    var argdata=url.parse(req.url,true)
    console.log(argdata)
    console.log(argdata.query)
    finalres=JSON.parse(JSON.stringify(argdata.query))
    console.log(finalres)
    try {
        res.writeHead(200,{'Content-Type':'application/JSON'})
        const datae=await database.showalldata(finalres)
        console.log("mmmm:",datae)
    }
    finally {
        res.end()
    }
}).listen(4680)
console.log("Port listening 4680")