const Review = require('../models/Review');
// Lấy toàn bộ đánh giá
exports.getAllreviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('productId', 'userId');
        res.satus(200).json(reviews);
    } catch (err) {
        res.satus(500).json({ message: 'Lỗi server', error: err.message }); 
    }
};
// Tạo mới đánh giá
exports.createReview = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        const saved = await newReview.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: 'Không thể tạo đánh giá', error: err.message });
    }
}
// Xóa đánh giá 
exports.deleteReview = async (req, res) => {
    try {
        const deleted = await Review.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Không tìm thấy đánh giá' });
        res.status(200).json({ message: 'Đã xóa đánh giá' });
    } catch (err) {
        res.status(500).json({ message: 'Lỗi xóa đánh giá', error: err.message });
    }
};