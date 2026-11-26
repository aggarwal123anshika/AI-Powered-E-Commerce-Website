import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'

function RelatedProduct({category,subCategory,currentProductId}) {
    let {products} = useContext(shopDataContext)
    let [related,setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0) {
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
            productsCopy = productsCopy.filter((item) => currentProductId !== item._id)
            setRelated(productsCopy.slice(0,4))
        }
    },[products,category,subCategory,currentProductId])
  return (
    <div>

    </div>
  )
}

export default RelatedProduct