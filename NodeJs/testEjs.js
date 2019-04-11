const http = require('http');
const fs = require('fs');
const testEjs = require('ejs');
let template = fs.readFileSync(__dirname + '/test/hello.ejs', 'utf-8')
const server = http.createServer((req, res) => {
    let data = testEjs.render(template, {
        title: 'hello ejs',
        content: '<strong>big hello ejs</strong>',
    })
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200;
    res.end(data);
})

const config = require('./config').config;
server.listen(config.hostname, config.port, () => {
    console.log(`Server Running in http://${config.hostname}:${config.port}`)
})