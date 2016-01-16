/**
 * Created by lizwestberg on 1/16/16.
 */
var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res){
   var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('Joined path:', joinedPath);
    res.sendFile(joinedPath);
});

module.exports = router;