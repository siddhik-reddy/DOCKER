const express = require('express');  //importing of express

const app = express(); // creats express application

app.use(express.json()); //json parser

app.get('/', (req,res) => {
    res.send('hello welcome to express\n\n hello to docker world');
});

app.listen(4001,() =>
console.log("app started at post 4000"))
