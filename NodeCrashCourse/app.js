const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', "ejs");

// listen for requests
app.listen(5500);

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('methodt: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('and the next middlewar is :');
//     next();
// });
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [
        {title: 'Yoshi find eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'Mario find stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ];
    res.render('index', { title: 'Home', blogs: blogs });
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

// redirects
// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: '404' });
});