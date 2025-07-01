const Categorie = require('../models/Categories');
// lay tất cả danh mục sản phẩm
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi server', error: err.message });
    }
};
// lay danh mục sản phẩm theo id
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Categorie.findById(req.params.id);
        if (!category) return res.status(404).json({ error: 'Không tìm thấy danh mục' });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// tạo mới danh mục sản phẩm
exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Categorie(req.body);
        const saved = await newCategory.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: 'Không thể tạo danh mục', error: err.message });
    }
}
// cập nhật danh mục sản phẩm
exports.updateCategory = async (req, res) => {
    try {
        const updated = await Categorie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: 'Không tìm thấy danh mục', error: err.message });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });   
}
};  
// xóa danh mục sản phẩm
exports.deleteCategory = async (req, res) => {
    try {
        const deleted = await Categorie.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Không tìm thấy danh mục' });
        res.status(200).json({ message: 'Đã xóa danh mục' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};