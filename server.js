const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));
//Express HBS
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Jhon Dairo Rivera',
        anio: new Date().getFullYear()
    });


});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        nombre: 'Jhon Dairo Rivera',
        anio: new Date().getFullYear()
    })
});


app.listen(port, () => {
    console.log(`Escuchando peticiones puerto ${port}`);
});