"use client";

import React from 'react'
import Image from 'next/image'
import banane from '../public/assets/images/bananas-575773_640.png'
import istockphoto from '../public/assets/images/istockphoto-1487569726-1024x1024.jpg'
import cerise from '../public/assets/images/cherries-158241_640.png'
import coco from '../public/assets/images/coconut-575780_640.png'
import pasteque from '../public/assets/images/fruit-2850840_640.png'
import fraise from '../public/assets/images/strawberry-37781_640.png'
import { CustomButton } from '.';

const Hero = () => {
    const handelClick = () => {

    }
    return (

        <div className="relative isolate pt-14 flex flex-row justify-between items-center overflow-y-hidden container" >

            <div className="mx-auto w-4/5 sm:w-3/4 lg:w-2/3 py-32 sm:py-48  lg:py-56 border-2 border-black">
                {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding.{' '}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div> */}
                <div className="flex flex-col justify-between">
                    <div className="relative">
                        <div className="flex flex-col justify-center  lg:mx-16 z-50">
                            <h1 className="font-bold tracking-tight text-left font-lob text-gray-900 text-4xl sm:text-6xl">
                                Des saveurs fraîches
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Nous produisons, nous même, au Maroc et en Espagne des fruits et légumes frais que nous commercialisons, nous sommes présents en France, Espagne, Belgique, Allemagne, Danemark, Angleterre,
                            </p>
                        </div>
                        <div>
                            <CustomButton
                                title="Passer une commande"
                                containerStyle="rounded-md bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-second-green hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                handelClick={handelClick}
                            />
                        </div>


                    </div>
                </div>
            </div>
            <div className=' hidden w-full max-w-3xl lg:flex h-96 '>
                <div className="relative flex flex-col w-full h-full">
                    <Image
                        layout='fill'
                        src={istockphoto}
                        alt="Picture of the author"
                        objectFit="cover" // change to suit your needs
                        className="rounded-lg z-0" // just an example
                    />
                </div>
            </div>

        </div >

    )
}

export default Hero