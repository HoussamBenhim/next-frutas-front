
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
import { getServerSession } from 'next-auth'
import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { CustomButton } from '.'
import ProductCard from './ProductCard'
// const products = [
//   {
//     id: 1,
//     name: 'Organize Basic Set (Walnut)',
//     price: '$149',
//     rating: 5,
//     reviewCount: 38,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   {
//     id: 2,
//     name: 'Organize Pen Holder',
//     price: '$15',
//     rating: 5,
//     reviewCount: 18,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   {
//     id: 3,
//     name: 'Organize Sticky Note Holder',
//     price: '$15',
//     rating: 5,
//     reviewCount: 14,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   {
//     id: 4,
//     name: 'Organize Phone Holder',
//     price: '$15',
//     rating: 4,
//     reviewCount: 21,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
//     imageAlt: 'TODO',
//     href: '#',
//   },
//   // More products...
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const ProductList = ({ products }) => {



    // const session = await getServerSession(authOptions)
    // console.log(session)

    return (
        <div className="bg-white mt-4 ">
            <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 border-2 border-black">
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