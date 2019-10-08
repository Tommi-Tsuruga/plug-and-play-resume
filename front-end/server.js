/**
 * server.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

const path=require('path');
const express=require('express');
const {redirectToHTTPS} = require("express-http-to-https");
const app=express();
const publicPath=path.join(__dirname, 'public');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT;

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));
app.use(express.static(publicPath));

app.listen(process.env.PORT, ()=>
    console.log(`Server is up on ${process.env.PORT}!`));
