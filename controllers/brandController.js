const Brand = require('../models/Brands');

// Tạo mới brands
exports.createBrand = async (req, res) => {
    try {
        const newBrand = new Brand(req.body);
        const saved = await newBrand.save();
        res.status(201).json(saved);

    } catch (err) {
        res.status(400).json({ message: 'Lỗi tạo brand', error: err.mesage });
    }
}
// Lấy toàn bộ danh sách brands
exports.getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi lấy danh sách brands', error: err.message });

    }
}
// Lấy danh sách brand theo id
exports.getBrandById = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        if (!brand) return res.status(404).json({ message: 'Không tìm thấy brand', error: err.mesage });
        res.status(200).json(brand);
    } catch (err) {
        res.status(500).json({ message: 'Lỗi server', error: err.message });
    }
}
// Cập nhật brand
exports.updateBrand = async (req, res) => {
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(req.params.id, res.body, { new: true });
        if(!updatedBrand) return res.status(400).json({message:'Không tìm thấy brand'});
        res.json(updatedBrand);
    } catch (err) {
        res.status(400).json({ message:'Lỗi khi update brand', errol:err.message });
    }

}
// Xóa brand
exports.deleteBrand = async (req, res) =>{
    try {
        const deleteBrand = await Brand.findByIdAndDelete(req.params.id);
        if(!deleteBrand) return res.status(404).json({message:'Không tìm thấy brand'});
        res.status(200).json({message:'Đã xóa thành công brand'});
    } catch (err) {
        res.status(500).json({message:'Lỗi server',error:err.message});
    }
}