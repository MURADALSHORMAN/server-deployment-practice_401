'use strict';

// 'requier' in js -- should be berfor use any nalue related to it
// 'import' in ES6 -- the js move import to the begining of file so we can do it anywhere in the file

const express= require('express');
const app= express();
const notfoundhandler= require('./error-handlers/404');
const errorHandler= require('./error-handlers/500');
// to add any middleware we use the 'use' keyword

app.get('/',(req,res)=>{
  res.status(200).send('hello world');
});

app.get('/bad',(req,res)=>{
throw new Error('Somthing Wrong');
});

app.use('*',notfoundhandler); // this should to be after all the route
app.use(errorHandler); // this have to be the last line before export 

function start(port){
  app.listen(port,()=>{console.log(`the server is working on ${port}`)});
}


module.exports={
  app:app,
  start:start
}
