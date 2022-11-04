const express = require('express');
const fs = require('fs');

// if(typeof localStorage === "undefined" || localStorage === null){


//     var LocalStorage = require('node-localstorage').LocalStorage;
//     localStorage = new LocalStorage('./scratch');
// }
const router = express.Router();

router.get('/login', (req, res, next) => {
  
    res.send('<h1>Login Page</h1> <form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input type="text" name="username" id="username"><button type="submit">Login</button></form>');

});

router.post('/login', (req, res, next) => {

    console.log(req.body);
    res.redirect('/messages');
});

module.exports = router;

