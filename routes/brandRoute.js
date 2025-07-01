const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController'); 

router.get('/',brandController.getAllBrands);
router.get('/:id',brandController.getBrandById);
router.post('/',brandController.createBrand);
router.delete('/:id',brandController.deleteBrand);
router.put('/:id',brandController.updateBrand);

module.exports = router;