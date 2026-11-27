// import User from "../model/userModel.js";

// export const addToCart = async (req, res) => {
//     try {
//         const {itemId, size} = req.body;
//         const userData = await User.findById(req.userId);

//         // Check if user exists
//         if(!userData) {
//             return res.status(404).json({ message : "User not found" });
//         }

//         // Ensures cartData is initialized
//         let cartData = userData.cartData || {};

//         if(cartData[itemId]) {
//             if(cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }

//         await User.findByIdAndUpdate(req.userId, { cartData });

//         return res.status(201).json({ message : "Added to cart" });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message : "AddToCart Error" });
//     }

// }

// export const UpdateCart = async (req, res) => {
//     try {
//         const {itemId, size, quantity} = req.body;
//         const userData = await User.findById(req.userId)
//         let cartData = await userData.cartData;

//         cartData[itemId][size] = quantity

//         await User.findByIdAndUpdate(req.userId, {cartData})
    
//     return res.status(201).json({ message : "Cart updated" })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({message : "updateCart error"  });
//     }
// }

// export const getUseCart = async (req, res) => {
//     try {
//         const userData = await User.findById(req.userId)
//         let cartData = await userData.cartData;
//     return res.status(200).json(cartData)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({ message : "getUserCart Error" })
//     }
// }





import User from "../model/userModel.js";

export const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;

        const userData = await User.findById(req.userId);

        if (!userData) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await User.findByIdAndUpdate(req.userId, {
            cartData
        });

        return res.status(200).json({
            message: "Added to cart"
        });

    } catch (error) {
        console.log("AddToCart Error:", error);

        return res.status(500).json({
            message: "AddToCart Error"
        });
    }
};

export const UpdateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;

        const userData = await User.findById(req.userId);

        if (!userData) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        let cartData = userData.cartData || {};

        if (!cartData[itemId] || !cartData[itemId][size]) {
            return res.status(404).json({
                message: "Item not found in cart"
            });
        }

        cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(req.userId, {
            cartData
        });

        return res.status(200).json({
            message: "Cart updated"
        });

    } catch (error) {
        console.log("UpdateCart Error:", error);

        return res.status(500).json({
            message: "UpdateCart Error"
        });
    }
};

export const getUseCart = async (req, res) => {
    try {
        const userData = await User.findById(req.userId);

        if (!userData) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        let cartData = userData.cartData || {};

        return res.status(200).json(cartData);

    } catch (error) {
        console.log("GetUserCart Error:", error);

        return res.status(500).json({
            message: "GetUserCart Error"
        });
    }
};
