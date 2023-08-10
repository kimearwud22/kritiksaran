// crud express untuk frontend input data rental laptop conect to dummy json dengan model, controller and router
// import express
const express = require('express');
const app = express();
const cors = require('cors');
const routerKritik = require('./router/saran');

app.use(express.json());
app.use(cors());
app.use('/api', routerKritik);

app.listen('3002', () => {
    console.log('Server started on port 3002');
});  