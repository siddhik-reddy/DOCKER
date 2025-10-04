const express = require('express');  //importing of express

const app = express(); // creats express application

app.use(express.json()); //json parser

app.get('/', (req,res) => {
    res.send('hello welcome to express\n 1.select one');
});

app.listen(4000,() =>
console.log("app started at post 4000"))
