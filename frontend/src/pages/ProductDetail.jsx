// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { shopDataContext } from '../context/ShopContext'

// function ProductDetail() {
//     let {productId} = useParams()
//     let {products, currency} = useContext(shopDataContext)
//     let [productData, setProductData] = useState(false)

//     const [image, setImage] = useState('')
//     const [image1, setImage1] = useState('')
//     const [image2, setImage2] = useState('')
//     const [image3, setImage3] = useState('')
//     const [image4, setImage4] = useState('')
//     const [size, setSize] = useState('')

//     const fetchProductData = async () => {
//         products.map((item) => {
//             if(item._id === productId) {
//                 setProductData(item)
//                 console.log(productData)
//                 setImage1(item.image1)
//                 setImage2(item.image2)
//                 setImage3(item.image3)
//                 setImage4(item.image4)
//                 setImage(item.image1)

//                 return null;
//             } 
//         })
//     }

//     useEffect(()=>{
//         fetchProductData()
//     },[productId, products])
//   return productData ? (
//     <div>
//         <div className='w-[100vw] h-[130vh] md:h-[100vh]
//         bg-gradient-to-l from-[#141414] to-[#0c2025]
//         flex items-center justify-start flex-col
//         lg:flex-row gap-[20px]'>
            
// <div className='lg:w-[20%] md:w-[80%]
// h-auto lg:h-[80%] flex items-center
// justify-center gap-[10px] lg:gap-[20px]
// flex-col lg:flex-col flex-nowrap'>

//     {/* Image 1 */}
//     <div className='md:w-[100px] w-[50px]
//     h-[50px] md:h-[110px] bg-slate-300
//     border-[1px] border-[#80808049]
//     rounded-md overflow-hidden'>
//         <img src={image1} alt=""
//         className='w-full h-full cursor-pointer
//         rounded-md object-cover' onClick={()=>setImage(image1)}/>
//     </div>

//     {/* Image 2 */}
//     <div className='md:w-[100px] w-[50px]
//     h-[50px] md:h-[110px] bg-slate-300
//     border-[1px] border-[#80808049]
//     rounded-md overflow-hidden'>
//         <img src={image2} alt=""
//         className='w-full h-full cursor-pointer
//         rounded-md object-cover' onClick={()=>setImage(image2)}/>
//     </div>

//     {/* Image 3 */}
//     <div className='md:w-[100px] w-[50px]
//     h-[50px] md:h-[110px] bg-slate-300
//     border-[1px] border-[#80808049]
//     rounded-md overflow-hidden'>
//         <img src={image3} alt=""
//         className='w-full h-full cursor-pointer
//         rounded-md object-cover' onClick={()=>setImage(image3)}/>
//     </div>

//     {/* Image 4 */}
//     <div className='md:w-[100px] w-[50px]
//     h-[50px] md:h-[110px] bg-slate-300
//     border-[1px] border-[#80808049]
//     rounded-md overflow-hidden'>
//         <img src={image4} alt=""
//         className='w-full h-full cursor-pointer
//         rounded-md object-cover' onClick={()=>setImage(image4)}/>
//     </div>
//     <div className='lg:w-[60%] w-[80%] lg:h-[78%]
//     h-[70%] border-[1px] border-[#80808049] rounded-md 
//     overflow-hidden'>
//         <img src={image} alt="" className='w-[100%] lg:h-[100%]
//         h-[100%] text-[30px] text-white text-center
//         rounded-md object-fill'/>
//     </div>

// </div>

//         </div>
//     </div>
//   ) : <div className='opacity-0'></div>
// }

// export default ProductDetail



import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'

function ProductDetail() {
    let {productId} = useParams()
    let {products, currency} = useContext(shopDataContext)
    let [productData, setProductData] = useState(false)

    const [image, setImage] = useState('')
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [size, setSize] = useState('')

    const fetchProductData = async () => {
        products.map((item) => {
            if(item._id === productId) {
                setProductData(item)
                console.log(productData)
                setImage1(item.image1)
                setImage2(item.image2)
                setImage3(item.image3)
                setImage4(item.image4)
                setImage(item.image1)

                return null;
            } 
        })
    }

    useEffect(()=>{
        fetchProductData()
    },[productId, products])
  return productData ? (
    <div>
        <div className='w-[100vw] h-[130vh] md:h-[100vh]
        bg-gradient-to-l from-[#141414] to-[#0c2025]
        flex items-center justify-start flex-col
        lg:flex-row gap-[20px]'>
            <div className='lg:w-[50vw] md:w-[90vw]
            lg:h-[90vh] h-[50vh] mt-[70px] flex
            items-center justify-center md:gap-[10px]
            gap-[30px] flex-col-reverse lg:flex-row'>
                <div className='lg:w-[20%] md:w-[80%]
                h-[10%] lg:h-[80%] flex items-center
                justify-center gap-[50px] lg:gap-[20px]
                lg:flex-col flex-wrap'>
                    <div className='md:w-[100px] w-[50px]
                    h-[50px] md:h-[95px] bg-slate-300
                    border-[1px] border-[#80808049] 
                    rounded-md'>
                        <img src={image1} alt="" className='
                        w-[100%] h-[100%] cursor-pointer
                        rounded-md' onClick={()=>setImage(image1)}/>
                    </div>
                    <div className='md:w-[100px] w-[50px]
                    h-[50px] md:h-[95px] bg-slate-300
                    border-[1px] border-[#80808049] 
                    rounded-md'>
                        <img src={image2} alt="" className='
                        w-[100%] h-[100%] cursor-pointer
                        rounded-md' onClick={()=>setImage(image2)}/>
                    </div>
                    <div className='md:w-[100px] w-[50px]
                    h-[50px] md:h-[95px] bg-slate-300
                    border-[1px] border-[#80808049] 
                    rounded-md'>
                        <img src={image3} alt="" className='
                        w-[100%] h-[100%] cursor-pointer
                        rounded-md' onClick={()=>setImage(image3)}/>
                    </div>
                    <div className='md:w-[100px] w-[50px]
                    h-[50px] md:h-[95px] bg-slate-300
                    border-[1px] border-[#80808049] 
                    rounded-md'>
                        <img src={image1} alt="" className='
                        w-[100%] h-[100%] cursor-pointer
                        rounded-md' onClick={()=>setImage(image4)}/>
                    </div>
                    <div className='lg:w-[100%] w-[100%] lg:h-[95%]
//                  h-[70%] border-[1px] border-[#80808049] rounded-md 
//                  overflow-hidden'>
//                  <img src={image} alt="" className='w-[100%] lg:h-[100%]
//                  h-[100%] text-[30px] text-white text-center
//                  rounded-md object-fill'/>
//                  </div>
                </div>
            </div>
        </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default ProductDetail