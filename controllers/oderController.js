
const Order = require('../models/Oders');  

// Lấy toàn bộ đơn hàng
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi server', error: err.message });
    }
};
// Lấy đơn hàng theo id
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi server', error: err.message });
    }
};
// Tạo mới đơn hàng
exports.createOrder = async (req, res) => {
    try {
        const newOrder = await Order.createOrder(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: 'Không thể tạo đơn hàng', error: err.message });
    }
};
// Cập nhật đơn hàng theo id
exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body);
        if (!updatedOrder) return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: 'Lỗi cập nhật đơn hàng', error: err.message });
    }
};
// Xóa đơn hàng theo id
exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
        res.status(200).json({ message: 'Đã xóa đơn hàng' });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi xóa đơn hàng', error: err.message });
    }
};
