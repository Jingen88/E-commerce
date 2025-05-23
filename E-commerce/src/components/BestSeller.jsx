import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import { useEffect } from 'react';
import Title from './Title';

const BestSeller = () => {

const {products} = useContext(ShopContext);

const[bestSellers,setBestSellers] = React.useState([]);


useEffect(() => {

const bestProduct = products.filter((item) => (item.bestseller));
setBestSellers(bestProduct.slice(0,5))

},[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
Fan Favorites: Shop our most loved styles.
</p>
        </div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{bestSellers.map((product,index) => (
    <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price}/>
))}

</div>

    </div>
  )
}

export default BestSeller