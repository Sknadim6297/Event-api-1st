const express = require('express');
const { getEventById } = require('../Controllers/GetEventByIdController');
const { getEventByRP } = require('../Controllers/GetEventByR&P');
const { createEvent } = require('../Controllers/CreateEvent');
const { DeleteEvent } = require('../Controllers/DeleteEvent');


const router=express.Router();

router.get('/',getEventById);
router.get('/',getEventByRP);
router.post('/',createEvent);
router.delete('/:id',DeleteEvent);

module.exports=router;