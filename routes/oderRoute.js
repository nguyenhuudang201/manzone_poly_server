const express = require('express');
const router = express.Router();
const orderController = require('../controllers/oderController');
// Lấy toàn bộ đơn hàng
router.get('/', orderController.getAllOrders);
// Lấy đơn hàng theo id
router.get('/:id', orderController.getOrderById);
// Tạo mới đơn hàng
router.post('/', orderController.createOrder);
// Cập nhật đơn hàng theo id
router.put('/:id', orderController.updateOrder);
// Xóa đơn hàng theo id
router.delete('/:id', orderController.deleteOrder);

module.exports = router; // Xuất router để sử dụng trong app.js hoặc server.js