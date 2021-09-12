const express = require('express')
const data = require('../data/mock_data.json');


const router = express.Router();
//Health check
router.get('/health', (req, res) => {
    res.send('Health OK');
    });
//data route
router.get('/data', (req, res) => {
    if(data){
    res.status(200).send({
        data: data
    })
    }
    else{
        res.status(404).send({
              data: []
          })
    }

});

module.exports = router;