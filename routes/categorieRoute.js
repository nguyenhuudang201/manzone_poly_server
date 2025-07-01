const express = require('express');
const router = express.Router();    
const categorieController = require('../controllers/categorieController');
// Lấy toàn bộ danh mục
router.get('/', categorieController.getAllCategories);          
// Lấy danh mục theo id
router.get('/:id', categorieController.getCategoryById);
// Tạo mới danh mục
router.post('/', categorieController.createCategory);
// Cập nhật danh mục theo id
router.put('/:id', categorieController.updateCategory);
// Xóa danh mục theo id
router.delete('/:id', categorieController.deleteCategory);

module.exports = router;  // Xuất router để sử dụng trong app.js hoặc server.js