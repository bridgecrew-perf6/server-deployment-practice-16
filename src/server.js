'use strict';

const express = require('express');
const stamper = require('../middlewares/stamper');
const pagenotfound = require('../handlers/pagenotfound');
const errorHandler = require('../handlers/errorhandeller');


const mainpage=require("../controllers/mainpage");
const datapage=require("../controllers/datapage")

const app = express();

app.get("/",mainpage );

app.get("/data",datapage);

app.get('/test', stamper, (req, res) => {
    res.json({
        id: 3,
        name: 'teststudent',
        email: 'test@gmail.com',
        time: req.addtime
    });
});

app.get('/bad', (req, res) => {
    let num = 20;
    let result = num.forEach((y) => {
        console.log(y);
    });
    res.status(500).send(result);
})

app.use(pagenotfound);
app.use(errorHandler);

function start(PORT){
    app.listen(PORT ,()=>{
        console.log(`i'm listening on port ${PORT}`);
    })
}

module.exports ={
    app: app,
    start: start,
}
