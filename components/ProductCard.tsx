"use client"
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'
import BananeImage from '../public/assets/images/bananas-575773_640.png'
import { firstLetterToUpperCase } from '@/utils'
import { ProductProps } from '@/types'
const ProductCard = ({product}:ProductProps) => {
  return (
    <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                <Image
                                    layout='fill'
                                    src={BananeImage}
                                    alt="Picture of the author"
                                    objectFit="cover" // change to suit your needs
                                    className="rounded-lg z-0" // just an example
                                />
                            </div>
                            <div className="pb-4 pt-4 text-center ">
                                <h3 className="text-sm font-medium font-serif text-gray-900 ">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {firstLetterToUpperCase(product.productName)}
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
                                    <p className=" text-base font-medium font-mono   text-gray-500 ">{product.price}€/<span className='text-xs font-semibold text-start'> {firstLetterToUpperCase(product?.priceUnit)}</span></p>
                                    <CustomButton title={"+"} containerStyles={"rounded-none py-1 z-10"}/>
                                </div>
                            </div>
                        </div>
  )
}

export default ProductCard