const { ObjectId, Timestamp } = require("bson");
const { timeStamp } = require("console");
const { type } = require("os");

const mongoose = require(mongoose);

const ProductSchema = new mongoose.Schema( // san pham
    {
        name: {
            type: String,
            require: true
        },
        slug: { type: String }, //Ten khong dau cho URL
        brand: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        // so hang ton kho
        stock: {
            type: Number,
            require: true,
            default: 0
        },
        // list size co san
        size: { type: [String] },
        // list anh
        image: { type: [String] },
        color: { type: String },
        // ten models cua DanhMucSP
        DanhMucSPID: {
            type: ObjectId,
            ref: 'Categories',
            require: true
        },
        // ten models cua Brands
        BrandsID: {
            type: ObjectId,
            ref: 'Brands',
            require: true
        },
        createaAt: Date,
        updataedAt: Date

    }
);
module.exports = mongoose.model('SanPham', ProductSchema)