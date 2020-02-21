var express = require('express');
var app = express();
const lista = require('./base')
app.get("/productosCarrito", (req, res)=>{
    lista.listado.findAll().then(libro => {
        res.json(libro);
      });
})
app.post('/comprar',(req,res)=>{
    try{
        lista.listado.create(req.body).then(jane => {
            res.status(200)
            res.json(jane)
          })
    }catch{
        console.log(error)
    }
})
app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});