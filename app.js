const express = require('express');
const app = express();
const router = require("./controller/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', router);

app.listen(process.env.PORT || 8081, ()=>{console.log(`app listening on port ${process.env.PORT || 8081}`)});
