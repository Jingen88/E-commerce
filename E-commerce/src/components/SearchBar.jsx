import React, { useState, useContext,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible,setVisible]= useState(false)
    const location = useLocation();

useEffect(() => {
if(location.pathname.includes('collection')){
    setVisible(true)}
else{
    setVisible(false)
}

},[location])

    return showSearch ? (
        <div className='border-t border-b bg-white text-center'>
            <div className='inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input
                    type='text'
                    placeholder='Search'
                    className='flex-1 outline-none bg-inherit text-sm'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img src={assets.search_icon} className='w-4' alt='search icon' />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className='inline w-3 cursor-pointer'
                src={assets.cross_icon}
                alt='cross icon'
            />
        </div>
    ) : null;
};

export default SearchBar;