
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
import { getServerSession } from 'next-auth'
import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { CustomButton } from '.'

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
                        <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                <Image
                                    layout='fill'
                                    src={product.imageSrc}
                                    alt="Picture of the author"
                                    objectFit="cover" // change to suit your needs
                                    className="rounded-lg z-0" // just an example
                                />
                            </div>
                            <div className="pb-4 pt-4 text-center ">
                                <h3 className="text-sm font-medium font-serif text-gray-900 ">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.productName}
                                </h3>
                                {/* <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
                    </div> */}
                                <div className='mt-2 flex flex-row items-center justify-between px-3 '>
                                    <p className=" text-base font-medium font-mono   text-gray-400 ">{product.price}€/{product.priceUnit}</p>
                                    <CustomButton title={"+"} containerStyles={"rounded-none py-1 z-10"}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    // const products = await getAllProducts()



    //redirect("unauthorized")

}

export default ProductList