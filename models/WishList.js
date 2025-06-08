const { ObjectId } = require('bson');
const mongoose = require ('mongoose');
const { type } = require('os');

const WishListSchema = new mongoose.Schema(
    {
        userID:{
            type: ObjectId
        },
        productID: {
            type: ObjectId  
        },
        addedAt: Date
    }
)