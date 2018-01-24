var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
    res.render('index')
});

router.get('/log', function(req, res, next){
    var qsKeys = [];
    var qsValues = [];

    // Get your querystrings and values into arrays
    for(var q in req.query){
        qsKeys.push(q);
        qsValues.push(req.query[q]);
    }


    // output.csv header
    var fileAlreadyExists = fs.existsSync("output.csv");
    var stream = fs.createWriteStream("output.csv", {flags:'a'});
    if (!fileAlreadyExists) {
        stream.write(qsKeys.join(',') + "\n");
    }


    // write the values
    stream.write(qsValues.join(',') + "\n");
    stream.end();

    // For display purposes
    res.set('Content-Type', 'text/plain');
    res.write(qsKeys.join(',')+ "\n");
    res.write(qsValues.join(',')+ "\n");
    res.end();

});

module.exports = router;
