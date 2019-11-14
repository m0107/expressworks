const portNo = process.argv[2];
const express = require('express')
const app = express()
const fs = require('fs');

let fileName;
let data;

fileName = process.argv[3];
app.get('/books', function(req, res){ 
	data = fs.readFileSync(fileName.toString(),"utf8");
		object = JSON.parse(data);
		res.send(object)
});

app.listen(portNo)


