import express from 'express';


import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app= express();


app.use(bodyParser.json())





app.listen(8000,()=>{
    console.log('Server is running...........');
    mongoose.connect('mongodb+srv://expense-tracker:expense8240@cluster0.yt8mdt0.mongodb.net/myDatabase?appName=Cluster0').then(()=>{
        console.log("Database Connected.........")
    })
})