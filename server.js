// Imports
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// Integrate handblades
app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

// Middleware to files
app.use(express.static(path.join(__dirname, '/public')));

// Endpoints to pages

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info', { layout: 'dark' });
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});

// Middleware for no endpoint
app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(3000, () => {
  console.log('Server is running on port: 3000');
});