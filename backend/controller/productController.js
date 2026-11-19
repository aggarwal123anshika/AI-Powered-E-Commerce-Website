// import uploadOnCloudinary from "../config/cloudinary.js"
// // import Product from "../model/productModel.js";
// import productModel from "../model/productModel.js";

// export const addProduct = async (req, res) => {
//     try {
//         let {name,description,price,category,subCategory,sizes,
//             bestseller} = req.body

//             let image1 = await uploadOnCloudinary(req.files.image1[0].
//             path)
//             let image2 = await uploadOnCloudinary(req.files.image2[0].
//             path)
//             let image3 = await uploadOnCloudinary(req.files.image3[0].
//             path)
//             let image4 = await uploadOnCloudinary(req.files.image4[0].
//             path)

//             let productData = {
//                 name,
//                 description,
//                 price : Number(price),
//                 category,
//                 subCategory,
//                 sizes : JSON.parse(sizes),
//                 bestseller : bestseller === "true" ? true : false,
//                 date : Date.now(),
//                 image1,
//                 image2,
//                 image3,
//                 image4
//             }
            
//             const product = await productModel.create(productData)

//             return res.status(201).json(product)
//     } catch (error) {
//             console.log("AddProduct error");
//             return res.status(500).json({message : `AddProduct error ${error}`})
//     }
// }

// // export const listProduct = async (req, res) => {
// //     try {
// //         const product = await Product.find({});
// //         return res.status(200).json(product)

// //     } catch (error) {
// //         console.log("ListProduct Error")
// //         return res.status(500).json({message:`ListProduct Error ${error}`})
// //     }
// // }

// export const listProduct = async (req, res) => {
//     try {
//         const products = await productModel.find({});

//         console.log("Products found:", products.length);

//         return res.status(200).json(products);

//     } catch (error) {
//         console.log("ListProduct Error:", error);

//         return res.status(500).json({
//             message: error.message
//         });
//     }
// }

// // export const removeProduct = async (req, res) => {
// //     try {
// //         let {id} = req.params;
// //         const product = await Product.findByIdAndDelete(id);
// //         return res.status(200).json(product)
// //     } catch (error) {
// //         console.log("RemoveProduct Error")
// //         return res.status(500).json({message:`RemoveProduct Error ${error}`})
// //     }
// // }

// export const removeProduct = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await productModel.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({
//                 message: "Product not found"
//             });
//         }

//         return res.status(200).json({
//             message: "Product removed successfully",
//             product
//         });

//     } catch (error) {
//         console.log("RemoveProduct Error:", error);

//         return res.status(500).json({
//             message: error.message
//         });
//     }
// };





import uploadOnCloudinary from "../config/cloudinary.js";
import productModel from "../model/productModel.js";

// ADD PRODUCT
export const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller
        } = req.body;

        // Check all four images
        if (
            !req.files ||
            !req.files.image1 ||
            !req.files.image2 ||
            !req.files.image3 ||
            !req.files.image4
        ) {
            return res.status(400).json({
                message: "Please upload all four product images"
            });
        }

        // Upload images to Cloudinary
        const image1 = await uploadOnCloudinary(
            req.files.image1[0].path
        );

        const image2 = await uploadOnCloudinary(
            req.files.image2[0].path
        );

        const image3 = await uploadOnCloudinary(
            req.files.image3[0].path
        );

        const image4 = await uploadOnCloudinary(
            req.files.image4[0].path
        );

        // Check Cloudinary URLs
        if (!image1 || !image2 || !image3 || !image4) {
            return res.status(500).json({
                message: "Image upload failed"
            });
        }

        // Prepare product data
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true",
            date: Date.now(),
            image1,
            image2,
            image3,
            image4
        };

        // Save product in MongoDB
        const product = await productModel.create(productData);

        return res.status(201).json({
            message: "Product added successfully",
            product
        });

    } catch (error) {
        console.log("AddProduct Error:", error);

        return res.status(500).json({
            message: `AddProduct error: ${error.message}`
        });
    }
};


// LIST PRODUCTS
export const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});

        console.log("Products found:", products.length);

        return res.status(200).json(products);

    } catch (error) {
        console.log("ListProduct Error:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};


// REMOVE PRODUCT
export const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json({
            message: "Product removed successfully",
            product
        });

    } catch (error) {
        console.log("RemoveProduct Error:", error);

        return res.status(500).json({
            message: error.message
        });
    }
};
