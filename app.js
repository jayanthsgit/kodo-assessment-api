const express = require('express');
const app = express();
const router = require("./controller/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(process.env.PORT || 8081, ()=>{console.log(`app listening on port ${process.env.PORT || 8081}`)});
