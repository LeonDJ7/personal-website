const express = require('express')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config()
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', routes)
app.use(express.static(path.join(__dirname, 'client/public')));
    
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

app.listen(port, () => console.log("server running on ... " + port));