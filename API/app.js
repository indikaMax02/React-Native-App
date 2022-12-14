const express=require('express');
const mongoose=require('mongoose');
const session=require('./routes/session');
const user=require('./routes/crudOperations');
const post=require('./routes/post');
const manage=require('./routes/manage');
 const auth = require('./middleware/auth');

 var bodyParser = require('body-parser')


const app=express();
const port=4000;

const url='mongodb://localhost/bookMark'
mongoose.connect(url,{useNewUrlParser: true});
const con=mongoose.connection
con.on("open",()=>{
    console.log('MongoDB connected !');
})




app.use(express.json());

 app.use('/manage',manage);
 app.use('/user',auth,user);
// app.use('/manage',manage);




app.listen(port,()=>{
    console.log(`server is started in port ${port}`);
})
