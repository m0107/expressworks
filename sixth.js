const portNo = process.argv[2];
const express = require('express')
const app = express()
const crypto = require('crypto');
app.put('/message/:ID', function(req, res){ 
	res.send(crypto.createHash('sha1').update(new Date().toDateString() + req.params.ID).digest('hex'))	
});

app.listen(portNo)