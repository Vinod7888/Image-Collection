const GalleryModel = require("../../Modals/web/GalleryModel")


const ImageInsert = async (req, res) => {
    let {
        image,
        title,
        brand,
        category,
        description
    } = req.body

    let Gallery = new GalleryModel({
        image: image,
        title: title,
        brand: brand,
        category: category,
        description: description
    });

    Gallery.save().then(
        () => {
            res.send({
                status: 1,
                message: "Image Inserted",
                Gallery
            })
        }
    ).catch((error) => {
        res.send({
            status: 0,
            message: "Error while insert image",
            err: error
        })
    });
}

const GetAllImages = async (req, res) => {
    const Images = await GalleryModel.find();
    res.send({
        status: 1,
        GetAllImages: Images
    });
}

const GetSingleImage = async (req, res) => {
    try {
        let { id } = req.params;
        let image = await GalleryModel.findById(id);

        if (!image) {
            res.send({
                stauts: 0,
                message: "Image not found"
            })
        }

        res.send({
            status: 1,
            image
        })


    } catch (error) {
        res.send({
            status: 0,
            message: error.message
        })
    }
}

const EditImage = async (req, res) => {

    try {
        let { id } = req.params

        let {
            image,
            title,
            brand,
            category,
            description
        } = req.body

        let UpdateImg = await GalleryModel.findByIdAndUpdate(
            id, {
            image,
            title,
            brand,
            category,
            description
        },
            {
                returnDocument: "after"
            }
        );

        if (!UpdateImg) {
            res.send({
                status: 0,
                message: "Image not found"
            })
        }
        res.send({
            status: 1,
            message: "Image Saved",
            UpdateImg
        })

    } catch (error) {
        res.send({
            status: 0,
            message: "While error Update image"
        })
    }



}

const DeleteImage = async (req, res) => {
    let { id } = req.params
    await GalleryModel.deleteOne({ _id: id })
    res.send({
        status: 1,
        message: "Image Deleted"
    })
}

const DeleteAllImage = async (req, res) => {
    try {
        await GalleryModel.deleteMany()
        res.send({
            status: 1,
            message: "Deleted All Images"
        })
    } catch (error) {
        res.send({
            status: 0,
            message: error.message
        })
    }
}

module.exports = { ImageInsert, GetAllImages, DeleteImage, EditImage, GetSingleImage, DeleteAllImage }