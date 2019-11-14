
const portNo = process.argv[2];
const express = require('express')
const app = express();
app.use(require('stylus').middleware(process.argv[3]))
app.use(express.static(process.argv[3]) )
app.listen(portNo)