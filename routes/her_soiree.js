const express = require('express');
const router = express.Router();
const her_soireeController = require('../controllers/her_soiree');

router.get('/', her_soireeController.index);
router.get('/:id', her_soireeController.show);
router.post('/', her_soireeController.create);
router.put('/:id', her_soireeController.update);
router.delete('/:id', her_soireeController.destroy);


module.exports=router
