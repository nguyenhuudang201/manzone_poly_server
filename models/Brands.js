const mongoose = require ('mongoose');
const { type } = require('os');

const BrandsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        logo: {
            type: String,
        },
        description: {
            type: String
        },
        createaAt: Date,
        updataedAt: Date
        
    }
);