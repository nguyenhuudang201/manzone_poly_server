
const User = require('../models/User');
// Tạo mới user
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saved = await newUser.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({message:'Lỗi server',error:err.message});
    }
}
// Lấy toàn bộ danh sách User
exports.getAllUsers = async (req, res) =>{
    try {
        const users = await User.find();
        res.status(200).json({users})
    } catch (err) {
        res.status(500).json({message:'Lỗi sever',errol:err.message});
    }
};
// Lấy danh sách user theo ID
exports.getUserById = async (req, res )=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:'Không tìm thấy user'});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message:'Lỗi server',error:err.message});
    }
}
// Update user
exports.updateUser = async (req,res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body,{new: true});
        res.status(200).json(updated); 
    } catch (error) {
        res.status(500).json({message:'Lỗi server',error:err.message});
    }
}
// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        if(!deleted) return res.status(400).json({message:'Không tìm thấy User'})
        res.status(200).json({message:'Xóa thành công user'});
    } catch (error) {
        res.status(500).json({message:"Lỗi server",error:err.message})
    }
}