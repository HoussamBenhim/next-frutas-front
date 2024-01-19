"use client"
import React, { useState } from 'react'
import { SearchProduct } from '.'
const SearchBar = () => {
    const [product, setProduct]=useState('')
    const handleSubmit = () => {

    }
    return (
        <div>
            <form className='searchbar' onSubmit={handleSubmit}>
                <div className='searchbar__item'>
                    <SearchProduct 
                        product={product}
                        setProduct={setProduct}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar