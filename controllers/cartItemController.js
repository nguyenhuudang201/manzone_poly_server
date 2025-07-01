const CartItem = require('../models/Cart_item');

// Lấy toàn bộ CartItem
exports.getAllCartItems = async (req, res) => {
    try {
        const items = await CartItem.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi server', error: err.message });
    }
};
// Lấy CartItem theo id
exports.getCartItemById = async (req, res) => {
    try {
        const item = await CartItem.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Không tìm thấy cartItem' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
// tạo mới
exports.createCartItem = async (req, res) => {
    try {
        const newItem = new CartItem(req.body);
        const saved = await newItem.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: 'Không thể tạo CartItem', error: err.message })
    }
};
// update
exports.updateCartItem = async (req, res) => {
    try {
        const updated = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Không tìm thấy cartItem', error: err.message });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
// Xóa
exports.deleteCartItem = async (req, res) => {
    try {
        const deleted = await CartItem.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Không tìm thấy CartItem' });
        res.status(200).json({ message: 'Đã xóa cartItem'});

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};