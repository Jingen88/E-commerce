import React from "react";
import { createContext} from "react";
import {products} from "../assets/frontend_assets/assets";

 export const ShopContext = createContext();


const ShopContextProvider = ({children}) => {

const currency = '£';
const delivery_fee = 4.99; 
const[search,setSearch] = React.useState('')
const[showSearch, setShowSearch] = React.useState(true)

    const value ={
    products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    
    )
}

export default ShopContextProvider