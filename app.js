const http = require('http');

const express = require('express');
const parser = require('body-parser');
const app = express();// Create an express app instance here 


const login = require('./routes/login');
const messages = require('./routes/messages');

app.use(parser.urlencoded({extended: false})); // Parse incoming requests here
app.use(login);
app.use(messages);

app.listen(3500);


