/**
 * node.js编写一个简单的web服务器
 * */

const http = require('http');
const config = require('./config').config;

const server =http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')

    switch (req.url) {
        case '/':
            res.end('Hello world')
            break
        case '/about':
            res.end('This is about page')
            break
        case '/home':
            res.end('This is my Home page')
            break
        default:
            res.end('Nothing')
    }
});

server.listen(config.port,config.hostname,()=>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`)
})