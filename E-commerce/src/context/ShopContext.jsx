import React, { use } from "react";
import { createContext} from "react";
import {products} from "../assets/frontend_assets/assets";
import { useEffect } from "react";
import { toast } from "react-toastify";

 export const ShopContext = createContext();


const ShopContextProvider = ({children}) => {

const currency = '£';
const delivery_fee = 4.99; 
const[search,setSearch] = React.useState('')
const[showSearch, setShowSearch] = React.useState(true)
const [cartItems, setCartItems] = React.useState([])

   

    const addToCart =  async (itemId,size) => {

        if(!size){
            toast.error('Please select a size')
            return
        }

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


const getCartCount= () => {

    let totalCount = 0;
    for (const items in cartItems) {
        for (const size in cartItems[items]) {
            try {
                if (cartItems[items][size] > 0) {
                    totalCount += cartItems[items][size];
                }
            }
                catch (error) {
                console.error("Error in getCartCount:", error);
            }
        }
    }
    return totalCount;
}


    const value ={
        products, currency, delivery_fee,
            search, setSearch, showSearch, setShowSearch,
            cartItems, addToCart,getCartCount,
            
        }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    
    )
}

export default ShopContextProvider