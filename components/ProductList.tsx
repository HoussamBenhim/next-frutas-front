import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getAccessToken } from '@/utils/sessionTokenAccessor'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from "next/navigation"
import { productApp } from '@/utils'


async function getAllProducts() {
    const resp = await productApp.getAllProducts()
    if (resp.status == 200) {
        return resp.data
    }
    throw new Error('Failed to fetch data Status : ' + resp.status)
}

const ProductList = async () => {
    // const session = await getServerSession(authOptions)
    // console.log(session)
    try {
        const products = await getAllProducts()
        console.log(products)
        return (<div>ProductList success <span>walo</span></div>)
    } catch (error) {
        console.log(error)
        return <div>
            <p>sorry, an error happened. Chekc the server logs</p>
        </div>
    }

    redirect("unauthorized")

}

export default ProductList