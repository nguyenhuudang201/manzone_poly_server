const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        phone: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        role: { // Xac dinh vai tro nguoi dung
            type: String,
            enum: ['user','admin'],
            default: 'user' // Mac dinh la user neu khong khai bao
        }

        
    },{timestamps:true // tu dong them 2 truong
        // createdAt: thoi diem tao user
        // updatedAt : thoi diem cap nhat user lan cuoi}
});
module.exports = mongoose.model('User', UserSchema);