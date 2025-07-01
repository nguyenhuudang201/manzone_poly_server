const Product = require('../models/Product');

//  Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Lỗi server", error: err.message });
    }
};

//  Lấy chi tiết sản phẩm theo ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Lỗi server", error: err.message });
    }
};

//  Tạo sản phẩm mới
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const saved = await newProduct.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: "Lỗi tạo sản phẩm", error: err.message });
    }
};

//  Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        res.status(200).json(updated);
    } catch (err) {
        res.status(400).json({ message: "Lỗi cập nhật", error: err.message });
    }
};

//  Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        res.status(200).json({ message: "Xóa sản phẩm thành công" });
    } catch (err) {
        res.status(500).json({ message: "Lỗi xóa sản phẩm", error: err.message });
    }
};
