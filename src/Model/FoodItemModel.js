const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    FoodName: { type: String, required: true },
    FoodCode: { type: String, required: true},
    FoodImage: { type: String, required: true }, 
    FoodCategory: { type: String, required: true },
    QTY: { type: Number, required: true }, 
    Price: { type: Number, required: true } 
}, { timestamps: true, versionKey: false });

const FoodModel = mongoose.model('FoodItem', foodSchema);//collection name
module.exports = FoodModel
