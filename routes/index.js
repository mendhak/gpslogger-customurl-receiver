var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {

  res.send("Use /log endpoint with any HTTP method ");
});

router.all('/log', function(req, res, next){
    var qsKeys = [];
    for(var q in req.query){
        qsKeys.push(q);
    }
    res.send(qsKeys.join(','));

    var stream = fs.createWriteStream("output.txt", {flags:'a'});
    stream.write(qsKeys.join(',') + "\n");
    stream.end();

});

module.exports = router;
