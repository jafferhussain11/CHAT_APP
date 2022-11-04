const express = require('express');
const fs = require('fs');
const router = express.Router();


router.get('/messages', (req, res, next) => {

    
    fs.readFile('messages.txt', (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            //console.log(data.toString());
            res.send
            res.send('<h1>Messages Page</h1> <ul><li>' + data.toString() + '</li></ul> <form action="/messages" onsubmit="document.getElementById(`username`).value = localStorage.getItem(`username`)" method="POST"> <input type="hidden" id="username" name="username" > <input type="text" name="message"><button type="submit">Send</button></form> <script>console.log(`message page`)</script>');
        }
    });
    
    
});

router.post('/messages', (req, res, next) => {

    console.log(req.body);
    fs.appendFile('messages.txt', `
    ${req.body.username} :  ${req.body.message} `,(err) => {console.log(err)});
    res.redirect('/messages');

});




module.exports = router;