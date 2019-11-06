//always work in the  development branch then later merge to master
//console.log("Hello world!!!")
//read about event driven 
//read about express
const express = require('express');
const app =express ();

app.listen(3000,function(){
      console.log('listening on 3000')
})
//how to write a get request
app.get('/', (req,res)=>{
    res.send('Hello World')
})
//writing a path about us page
app.get('/about', (req,res)=>{
    res.send('About us')
})
//writing a post request
app.post('/', (req,res)=>{
    res.send('POST request')
})
//put method
app.put('/', (req,res)=>{
    res.send('Got a PUT request at /user')
})
//delete method
app.delete('/user', (req,res)=>{
    res.send('Got a DELETE request at /user')
})
app.get("*", (req,res)=>{
    res.send('ERROR Withdraw from this page')
})