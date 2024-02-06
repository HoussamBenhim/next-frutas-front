"use client"
import React from 'react'
import { CustomButton, ProductDetails } from '.'
import Image from 'next/image'
import BananeImage from '../public/assets/images/bananas-575773_640.png'
import {firstLetterToUpperCase } from '@/utils'
import { ProductProps } from '@/types'
import {useState} from 'react'


const ProductCard = ({ product }: ProductProps) => {
    const [isOpen, setIsOpen]=useState(false)
    console.log(isOpen);
    
    return (
        <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <Image
                    layout='fill'
                    src={BananeImage}
                    alt="Picture of the author"
                    priority
                    fill
                    objectFit="cover" // change to suit your needs
                    className="rounded-lg z-0" // just an example
                />
            </div>
            <div className="pb-4 pt-4 text-center ">
                <h3 className="text-sm font-medium font-serif text-gray-900 ">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {firstLetterToUpperCase(product.productName)}
                </h3>
                <div className="mt-3 flex flex-col items-center">
                    <div className="text-[10px] font-bold text-gray-300">Origine : {firstLetterToUpperCase(product?.origin)}</div>
                    <div className="mt-1 text-[9px]  font-bold text-gray-500">Unité de vente :    {firstLetterToUpperCase(product?.priceUnit)}</div>
                </div>
                <div className='mt-2 flex flex-row items-center justify-between px-3 '>
                    <p className="mt-2 text-pretty font-medium font-serif   text-gray-500 ">Prix : {product.price}€ {isOpen }</p>
                    <CustomButton title={"+"} containerStyles={"rounded-none py-1 z-10"} handelClick={()=>setIsOpen(true)} />
                </div>
            </div>
            <ProductDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} product={product}/>
        </div>
    )
}

export default ProductCard