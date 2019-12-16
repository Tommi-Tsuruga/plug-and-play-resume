/**
 * server.js
 * @author [Aisha Khoja, Keisuke Suzuki, Tommi Ann Tsuruga ](https://github.com/aishak7, https://github.com/Ks5810, https://github.com/tommi-tsuruga)
 */

const path = require('path');
const express = require('express');
const {redirectToHTTPS} = require("express-http-to-https");
const app = express();
const publicPath = path.join(__dirname, 'public/bundles/');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const PORT = process.env.PORT;

// Redirect HTTP to HTTPS,
app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));
app.use(express.static(publicPath));

app.listen(process.env.PORT, () =>
    console.log(`Server is up on http://localhost:${process.env.PORT}`));
