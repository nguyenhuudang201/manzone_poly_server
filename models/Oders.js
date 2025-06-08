const { ObjectId } = require('bson');
const momgoose = require('mongoose');
const { type } = require('os');

const OderSchema = new momgoose.Schema(
    {
        userID: {
            type: ObjectId
        },
        items: [
            {
                productID: ObjectId,
                quantity: Number,
                price: Number,
                size: String
            }
        ],
        tongTien: {
            type: Number
        },
        status: { 
            type: String,
            enum: ['pending', 'processing', 'shipped', 'completed', 'cancelled'],
            default: 'pending'
        },
        // dia chi giao hang
        shippingAddress: String,
         // phuong thuc thanh toan
        paymentMethod: {
            type: String,
             enum: ['cod', 'online'] },
        createdAt: Date,
        updatedAt: Date
    }
);
module.exports = momgoose.model('Oders',OderSchema);// tao ra collection theo model schema