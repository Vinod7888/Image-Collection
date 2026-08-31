const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

GalleryModel = mongoose.model("Gallery", GallerySchema);

module.exports = GalleryModel;
