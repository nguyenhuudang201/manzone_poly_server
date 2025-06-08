const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { type } = require('os');

const CartItemSchema = new mongoose.Schema(
    {
        
        userID:{
            type: ObjectId
        },
        productID: {
            type: ObjectId
        },
        quantity: {
            type: Number
        },
        size: {
            type: String
        },
        addedAt: Date
    }
)
module.exports = mongoose.model('CartItem',CartItemSchema);