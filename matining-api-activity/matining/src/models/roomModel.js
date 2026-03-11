const mongoose = require('mongoose');

const roomSchema =new mongoose .Schema({
    roomNumber: {
        type: Number,
        require: true,
        unique: true,
        min: [100,'Room number must be 3 digits'],
    },
    type: {
        type: String,
        require: true,
         
    },
    price:{
        type:Number,
        unique: true,
         min: [0,'Price cannot be negative'],

    },
    isBooked: {
        type: Boolean,
        default: false,
    },
    features: [String],
});

maintenanceLog: [
    {
        date: {type: Date, default: Date.now},
        issue: String,
        fixed: Boolean  
    }
]

module.exports = mongoose.model('Room', roomSchema);