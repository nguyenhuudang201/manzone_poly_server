const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { type } = require('os');
 
const ReviewSchema = new mongoose.Schema(
    {
        userID :{
            type: ObjectId
        },
        productID:{
            type: ObjectId
        },
        rating: {
            type: Number
        },
        comment: {
            type: String
        },
        createdAt: Date
    }
);
module.exports = mongoose.model('Reviews', ReviewSchema);