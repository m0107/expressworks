
const portNo = process.argv[2];
const express = require('express')
const app = express()
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(portNo)