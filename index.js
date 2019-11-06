//always work in the  development branch then later merge to master
//console.log("Hello world!!!")
//read about event driven 
//read about express
const express = require('express');
const app =express ();

app.listen(3000,function(){
      console.log('listening on 3000')
})
app.get('/', (req,res)=>{
    res.send('Hello World')
})