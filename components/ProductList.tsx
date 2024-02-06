
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
import { getServerSession } from 'next-auth'
import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { CustomButton } from '.'
import ProductCard from './ProductCard'
import { Product, ProductProps } from '@/types'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const ProductList = ({ products }) => {
    return (
        <div className="bg-white mt-4 ">
            <div className="mx-auto max-w-7xl overflow-hidden  border-2 border-black">
                <div className="-mx-px grid grid-cols-2 border-l border-t border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard product={product}/>                        
                    ))}
                </div>
            </div>
        </div>
    )
    // const products = await getAllProducts()



    //redirect("unauthorized")

}

export default ProductList