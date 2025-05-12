import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

const{productId} = useParams()
console.log("Product ID:", productId);
console.log("useParams:", useParams());
console.log("Product ID:", productId);

const {products,currency,addToCart} = useContext(ShopContext)
const [productData, setProductData] = useState(false)
const [image,setImage] = useState('')
const [size,setSize] = useState('')



const fetchProductData = async () => {
  const product = products.find((item) => item._id === productId);
  if (product) {
    setProductData(product);
    setImage(product.image[0]);
  }
};

useEffect(() => {
  console.log("Products:", products);
  console.log("Product ID:", productId);
  if (products.length > 0) {
    fetchProductData();
  }
}, [productId, products]);


  return productData ? (
    <>
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

{/* {Product Images} */}

<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
{
  productData.image.map((item,index)=>(
    <img key={index} onClick={()=>setImage(item)} src={item} alt='product image' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
  ))}
</div>
<div className='w-full sm:w-[80%]'>
  <img className='w-full h-auto ' src={image} alt=''/>

</div>
</div>

{/* {Product Details} */}
<div className='flex-1'>
  <h1 className='font-medium text-2xl  mt-2'>{productData.name}</h1>
  <div className='flex items-center gap-1 mt-2'>
    <img src={assets.star_icon} alt="star icon" className="w-3 5" />
    <img src={assets.star_icon} alt="star icon" className="w-3 5" />
    <img src={assets.star_icon} alt="star icon" className="w-3 5" />
    <img src={assets.star_icon} alt="star icon" className="w-3 5" />
    <img src={assets.star_dull_icon} alt="star icon" className="w-3 5" />
    <p className='pl-2'>(122)</p>
  </div>
<p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
<p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
<div className='flex flex-col gap-4 my-8'>
  <p>Select Size</p>
  <div className='flex gap-2'>
    {productData.sizes.map((item,index)=>(
      <button  onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
    ))}
  </div>
</div>
<button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
<hr className='mt-8 sm:w-4/5'/>
<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
<p>100% Original Product</p>
<p>Cash on delivery available on this proudct</p>
<p>Easy return and exchange policy within 7 days</p>
</div>
</div>
</div>

{/* product reviews */}

<div className='mt-20'>
<div className='flex'>
<b className='border px-5 py-3 text-sm'>Description</b>
<p className='border px-5 py-3 text-sm'>Reviews (122)</p>
</div>
<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
  <p>Step into a world where style meets convenience. Our online clothing boutique offers a meticulously curated collection of apparel designed to elevate your everyday wardrobe and make a statement on special occasions. From timeless classics to the latest trends, we believe that fashion should be accessible and empowering.</p>
  <p>Step into a world where style meets convenience. Our online clothing boutique offers a meticulously curated collection of apparel designed to elevate your everyday wardrobe and make a statement on special occasions. From timeless classics to the latest trends, we believe that fashion should be accessible and empowering.

Explore our diverse range of high-quality garments, thoughtfully sourced and crafted for exceptional comfort and lasting style. Whether you're searching for the perfect dress, a cozy knit, versatile separates, or the finishing touches to complete your look, our collections are designed to inspire your personal style journey. We're passionate about providing a seamless online shopping experience, complete with detailed product descriptions, size guides, and exceptional customer service to ensure you find exactly what you're looking for. Discover your next favorite outfit and embrace the confidence that comes with feeling perfectly dressed.</p>
s</div>
</div>

{/* display related products */}

<RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

</div>

 

</>
  ) : (<div className='text-center py-10'>Loading product details...</div>
)

}

export default Product