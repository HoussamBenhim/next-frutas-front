"use client"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
import { getServerSession } from 'next-auth'
import React from 'react'




const ProductList = async ({products}) => {
   

    
    // const session = await getServerSession(authOptions)
    // console.log(session)
   
        return (
            <div>list of product {products.length}</div>
        )
    // const products = await getAllProducts()



    //redirect("unauthorized")

}

export default ProductList