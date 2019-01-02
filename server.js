const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 5000;


app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');



app.set('view engine', 'hbs');


// app.get('/', function(req, res) {

//     let salida = {
//         nombre: 'Mario',
//         edad: 34,
//         url: req.url
//     };

//     res.send(salida)
// });

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'mario fernandez',
        anio: new Date().getFullYear()
    })
});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Mario',
        anio: new Date().getFullYear()
    })
});

// Test: http://localhost:3000/data
app.get('/data', function(req, res) {
    res.send('Hola data')
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})