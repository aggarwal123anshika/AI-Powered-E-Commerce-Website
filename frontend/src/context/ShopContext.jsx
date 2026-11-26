import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authContext';
import axios from 'axios';
export const shopDataContext = createContext()
function ShopContext({children}) {
    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState('')
    let [showSearch, setShowSearch] = useState(false)
    let {serverUrl} = useContext(authDataContext)
    let [cartItem, setCartItem] = useState({})
    let currency = '₹';
    let delivery_fee = 40;

    const getProducts = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = async (itemId, size) => {
        if(!size) {
            console.log("Select product Size");
            return;
        }
        let cartData = structuredClone(cartItem); //clone the product

        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if(cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {

                }
            }
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    let value = {
        products, currency, delivery_fee, getProducts,search,
        setSearch, showSearch, setShowSearch,cartItem, addToCart,
        getCartCount, setCartItem
    }

  return (
    <div>
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext