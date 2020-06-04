//importamos las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3005;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//sitio web y hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);

/*La conexion con MongoDB*/
mongoose.promise = global.promise;
const cadena = 'mongodb+srv://Abraham:Toledo123@cluster0-rvs85.mongodb.net/code?retryWrites=true&w=majority'
mongoose.connect(cadena,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexion establecida');
})
    .catch(err=> console.log(err));

/*Arrancar el servidor web*/
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});
