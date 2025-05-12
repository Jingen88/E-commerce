import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

const{productId} = useParams()
const{products} = useContext(ShopContext)
const[productData, setProductData] = React.useState(false)
const [image,setImage] = React.useState('')


const fetchProductData = async () => {

  products.map((item)=>{
    if (item._id === productId){
      setProductData(item)
      return null;
    }
  })


}

useEffect(() => {
  fetchProductData()
},[productId])


  return (
    <div>Product</div>
  )
}

export default Product