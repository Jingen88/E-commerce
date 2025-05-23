import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'



const LatestCollection = () => {
    const {products} = useContext(ShopContext);

    const[latestProducts,setLatestProducts] = React.useState([]);
   
    useEffect(() => {
        setLatestProducts(products.slice(0,10))
    },[])
    

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Step into what's next: Explore the latest collection.
        </p>
        </div>
        {/* Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((product) => (
            <ProductItem key={product._id} id={product._id} image={product.image} name={product.name} price={product.price}/>
        ))}
        </div>




    </div>
  )
}

export default LatestCollection