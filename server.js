const express = require ('express')
const app = express() 
const routes = require('routes');
const db = require('./config/connection');
const PORT = process.env.PORT||3001;

app.listen (PORT, () => { 
    console.log ('hewwo');
});
