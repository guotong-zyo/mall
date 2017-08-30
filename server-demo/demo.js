let user = require('./User')
console.log(`username:${user.sayHello()}`)

let http = require('http')
let url = require('url')
let util = require('util')
let server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain; charset=utf-8')

    url.parse(req.url)
    let str = util.inspect(url.parse(req.url))
    res.end(str)
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server start at http://127.0.0.1:3000')
})