const path = require('path');

const express = require('express');
const app = express();
const core = require('cors')

const port = 8003;

app.use(core())

app.get('/api/product' , (req, res)=>{
    res.sendFile(path.join(__dirname, 'data', 'product.json'))
})

app.listen(port, ()=>console.log(`[products] API listening on port ${port}.`))