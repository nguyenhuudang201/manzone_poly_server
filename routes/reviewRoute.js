const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/',reviewController.getAllreviews);
router.post('/',reviewController.createReview);
router.delete('/:id',reviewController.deleteReview);

module.exports = router;