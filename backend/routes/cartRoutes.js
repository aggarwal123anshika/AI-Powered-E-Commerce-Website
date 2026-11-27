// import express from 'express'
// import { addToCart, getUseCart, UpdateCart } from '../controller/cartController'
// import isAuth from '../middleware/isAuth.js'
// const cartRoutes = express.Router()

// cartRoutes.post('/get',isAuth,getUseCart)
// cartRoutes.post('/add',isAuth,addToCart)
// cartRoutes.post('/update',isAuth,UpdateCart)


// export default cartRoutes



import express from 'express';
import {
    addToCart,
    getUseCart,
    UpdateCart
} from '../controller/cartController.js';

import isAuth from '../middleware/isAuth.js';

const cartRoutes = express.Router();

cartRoutes.post('/get', isAuth, getUseCart);
cartRoutes.post('/add', isAuth, addToCart);
cartRoutes.post('/update', isAuth, UpdateCart);

export default cartRoutes;
