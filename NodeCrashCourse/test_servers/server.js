const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);
    // utilisationde lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    })

    greet();
    greet();
    
    // set header content type
    // res.setHeader('Content-Type', 'text/plain'); // envoi du texte brut

    res.setHeader('Content-Type', 'text/html');

    // affiche du texte brut
    // res.write('hello, ninja');      

    // affiche du html
    // res.write('<head><link rel="stylesheet" href="#"></head>');  
    // res.write('<p>hello, ninja</p>');  
    // res.write('<p>hello again, ninja</p>');
    // res.end();

    // send an html files
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-ok': 
            // redirection de about-me vers about
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(5500, 'localhost', () => {
    console.log('listening for request on port 3000');
});

