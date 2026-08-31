const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    categoryname: {
        type: String,
        required: true
    },
    subCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    image: {
        type: String,
    },
    decription: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true,
    },
},
    {
        timestamps: true
    }
)

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;