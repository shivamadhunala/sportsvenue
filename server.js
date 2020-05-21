// install and import express module
const exp=require('express');
const app=exp();// express obj
const path=require('path');

//connect server.js with sportsvenue app of dist folder
app.use(exp.static(path.join(__dirname,'./dist/sportsvenue')));

const  _portnum=3000;

const bodyParser=require('body-parser');// for the purpose of converting object into json
app.use(bodyParser.json());//middleware for above purpose





//import UserApi and venueAPi ownerApi
const userApi=require('./apis/userApi');
const venueApi=require('./apis/venueApi');
const ownerApi=require('./apis/ownerApi');



//middleware
app.use('/users',userApi);
app.use('/findvenues',venueApi);
app.use('/owner',ownerApi);











app.listen(_portnum,(err)=>{
 if(err){
   console.log(err);
 }
 else{
   console.log(`server listening on port number ${_portnum}`);
 }
});
