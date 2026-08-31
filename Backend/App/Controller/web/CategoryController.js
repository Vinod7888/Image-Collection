const CategoryModel = require("../../Modals/web/CategoryModel")


const InsertCategory = async (req, res) => {
    try {
        let {
            categoryname,
            subCategory,
            image,
            decription,
            status,
            parantId,
        } = req.body

        if (!categoryname) {
            res.send({
                status: 0,
                message: "Category Name is Required"
            })
        }

        const checkCategory = await CategoryModel.findOne({ categoryname: categoryname })

        if (checkCategory) {
            res.send({
                status: 0,
                message: "Category Already Exist"
            })
        }

        const category = new CategoryModel({
            categoryname,
            subCategory,
            image,
            decription,
            status,
            parantId,
        })

        await category.save()

        res.send({
            status: 1,
            message: "Category Inserted Successfully",
            data: category
        })
    } catch (error) {
        res.send({
            status: 0,
            message: "Error while inserting category",
            error: error.message
        })
    }

}


// Controller/web/CategoryController.js

const GetCategoriesForCollections = async (req, res) => {
    try {
        const categories = await CategoryModel.find({
            status: true
        }).select('categoryname image description');

        res.send({
            status: 1,
            message: "Categories fetched successfully",
            data: categories
        });
    } catch (error) {
        res.send({
            status: 0,
            message: "Error while fetching categories",
            error: error.message
        });
    }
}


const GetAllCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find().populate('subCategory')
        res.send({
            status: 1,
            message: "Category Fetched Successfully",
            data: category
        })
    } catch (error) {
        res.send({
            status: 0,
            message: "Error while fetching categories",
            error: error.message
        })
    }
}

const GetSingleCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id).populate('subCategory')
        res.send({
            status: 1,
            message: "Category Fetched Successfully",
            data: category
        })
    } catch (error) {
        res.send({
            status: 0,
            message: "Error while fetching category",
            error: error.message
        })
    }
}

const UpdateCategory = async (req, res) => {
    try {
        let { id } = req.params
        let {
            categoryname,
            subCategory,
            image,
            decription,
            status,
        } = req.body

        const category = await CategoryModel.findById(id);

        if (!category) {
            res.send({
                status: 0,
                message: "Category Not Found"
            })
        }
        const UpdateCategory = await CategoryModel.findByIdAndUpdate(
            id,
            {
                categoryname,
                subCategory,
                image,
                decription,
                status,
            },
            { new: true }
        );
        res.send({
            status: 1,
            message: "Category Updated Successfully",
            data: UpdateCategory
        })
    } catch (error) {
        res.send({
            status: 0,
            message: "Error while updating category",
            error: error.message
        })
    }
}

const DeleteCategory = async (req, res) => {
    try {
        let { id } = req.params
        const category = await CategoryModel.findById(id);
        if (!category) {
            return res.send({
                status: 0,
                message: "Category Not Found"
            })
        }
        await CategoryModel.findByIdAndDelete(id);
        res.send({
            status: 1,
            message: "Category Deleted Successfully"
        })
    } catch (error) {
        res.send({
            status: 0,
            message: "Error while deleting category",
            error: error.message
        })
    }
}




module.exports = {
    InsertCategory,
    GetAllCategory,
    GetSingleCategory,
    UpdateCategory,
    DeleteCategory,
    GetCategoriesForCollections
}