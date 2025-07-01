const { Timestamp } = require('bson');
const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const CategoriesSchema = new mongoose.Schema( // Danh muc san pham
    {
        name: {
            type: String,
            require: true
        },
        slug: {
            type: String,
        },
        createaAt: Date,
        updataedAt: Date


    }

);
module.exports= mongoose.model('DanhMucSanPham',CategoriesSchema);