/**
 * 读取html文件内容
 * */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile(__dirname+'/hello.html','utf-8',function(err,data){
        if(err){
            res.setHeader('Content-Type','text/plain');
            res.statusCode = 404
            res.end('Not Found')
        }else{
            res.setHeader('Content-Type','text/html')
            res.statusCode = 200
            res.end(data)
        }
    })
})

const hostname = '127.0.0.1'
const port = '8000'
const config = require('./config').config
server.listen(config.port,config.hostname,()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`)
})