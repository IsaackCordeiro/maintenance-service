const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const { verificarToken } = require('../middlewares/authMiddleware');

router.post('/maintenances', verificarToken, maintenanceController.create);
router.get('/maintenances', verificarToken, maintenanceController.findAll);
router.get('/maintenances/:id', verificarToken, maintenanceController.findById);
router.put('/maintenances/:id', verificarToken, maintenanceController.update);
router.delete('/maintenances/:id', verificarToken, maintenanceController.delete);

module.exports = router;