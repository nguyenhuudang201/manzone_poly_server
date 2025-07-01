const Wishlist = require('../models/WishList');
// Lấy toàn bộ danh sách yêu thích
exports.getAllWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.find().populate('userId productId');
        res.status(200).json(wishlists);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi server', error: err.message });
    }
};
// Thêm danh sách yêu thích
exports.createWishlist = async (req, res) => {
    try {
        const newWishlist = new Wishlist(req.body);
        const saved = await newWishlist.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: 'Không thể tạo danh sách yêu thích', error: err.message });
    }
};
// Xóa danh sách yêu thích
exports.deleteWishlist = async (req, res) => {  
    try {
        const deleted = await Wishlist.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Không tìm thấy danh sách yêu thích' });
        res.status(200).json({ message: 'Đã xóa danh sách yêu thích' });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi xóa danh sách yêu thích', error: err.message });
    }
};