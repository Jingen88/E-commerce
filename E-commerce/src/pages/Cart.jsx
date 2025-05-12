import React, { use } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

const {products,currency,cartItems} = React.useContext(ShopContext);

const [cartData, setCartData] = React.useState([]);



useEffect(() => {

for (const items in cartItems){
    for (const size in cartItems[items]) {
        try {
            if (cartItems[items][size] > 0) {
                const product = products.find((product) => product.id === items);
                if (product) {
                    setCartData((prevData) => [
                        ...prevData,
                        { ...product, size: size, quantity: cartItems[items][size] },
                    ]);
                }
            }
        } catch (error) {
            console.error("Error in getCartCount:", error);
        }
    }   
}



},[cartItems])

  return (
    <div>Cart</div>
  )
}

export default Cart