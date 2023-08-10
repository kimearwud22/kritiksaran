// conttroler untuk model
const express = require('express');
const router = express.Router();
const kritiks = require('../controller/kritik');

//get data pelanggan
router.get('/kritik', kritiks.getSaran);
router.get('/kritik/:id', kritiks.getSaranById);
router.post('/kritik', kritiks.postSaran);
router.put('/kritik/:id', kritiks.putSaran);
router.delete('/kritik/:id', kritiks.deleteSaran);


module.exports = router;