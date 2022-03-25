const express = require('express');
const Container = require('./clase4');
const app = express();
const PORT = 8080;

const prod = new Container('products.json')

rnd = async () =>{
   let producto = await prod.random()
   return producto
}

all = async () =>{
    let arrayProductos = await prod.getAll()
    return arrayProductos
}

app.get( '/productos', ( req, res ) =>{

    all().then(resp => res.send(resp))

});

app.get( '/productoRandom', ( req, res ) =>{


    rnd().then(resp => res.send(resp))

});

const server = app.listen( PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en el servidor ${error}`));