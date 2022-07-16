const path = require('path')
const express = require('express');
const { request } = require('http');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require('multer');
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(console.log("connected to mongodb")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>
    {
        cb(null, 'images' , )
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
});

const upload = multer({storage:storage});
app.post('/upload' , upload.single('file'),(req,res)=>{
    res.status(200).json('File has been uploaded');
})

app.use('/auth' , authRoute);
app.use('/users', userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);
//server frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, '../','client','build','index.html')))
}else{
    app.get('/', (req,res)=>res.send('Please set to production'))
}

app.listen('5000' , ()=> {
    console.log('backend is running');
});

