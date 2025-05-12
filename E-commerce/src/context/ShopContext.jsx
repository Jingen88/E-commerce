import React, { use } from "react";
import { createContext} from "react";
import {products} from "../assets/frontend_assets/assets";

 export const ShopContext = createContext();


const ShopContextProvider = ({children}) => {

const currency = '£';
const delivery_fee = 4.99; 
const[search,setSearch] = React.useState('')
const[showSearch, setShowSearch] = React.useState(true)
const [cartItems, setCartItems] = React.useState([])

   

    const addToCart =  async (itemId,size) => {

    let cartData = structuredClone(cartItems)

    if(cartData[itemId]){
        if(cartData[itemId][size] === size){
        cartData[itemId][size] += 1
    }
    else{
        cartData[itemId][size] = 1;
    }
}
    else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    setCartItems(cartData)
    }


useEffect(() => {

    const cartData = localStorage.getItem('cartItems')

},[cartItems])


    const value ={
        products, currency, delivery_fee,
            search, setSearch, showSearch, setShowSearch,
            cartItems, addToCart,
            
        }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    
    )
}

export default ShopContextProvider