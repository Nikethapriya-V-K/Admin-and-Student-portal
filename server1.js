var http=require("http")
var url=require('url')

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET')
    res.setHeader('Access-Control-Max-Age',2592000)
    console.log(req.url)
    var argdata=url.parse(req.url,true)
    console.log(argdata)
    console.log(argdata.query)
    const name=argdata.query.username
    const password=argdata.query.password
    try{
    if(name=='admin' && password=='password@1234')
    {
        res.writeHead(200,{'Content-Type':'application/json'})
        const login='success'
        console.log(login)
        res.write(login)
    }
}
    finally{
        res.end()
    }
}).listen(1234)
console.log('port listening')


