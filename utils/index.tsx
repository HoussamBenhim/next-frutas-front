import axios from 'axios'

export const productApp = {
    getAllProducts,
    addProduct
}


export const firstLetterToUpperCase = (str: String): String => {
    if (!str || str.length < 2) return str;
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

export const classNames = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ')
}

function getAllProducts() {
    return instance.get(`/api/products/all`)
}
function addProduct(token:string) {
    return instance.post('/api/products', JSON.stringify({
        "name": "fraises costarica",
        "eancode": 3234,
        "category": {
            "categoryName": "fruits",
            "subCategoryName": "fraise",
            "familyName": "qsdkljml"
        }
    }), {
        headers: { 'Authorization': bearerAuth(token),"Content-Type": "application/json", }
    })
}



const instance = axios.create({
    baseURL: process.env.BACK_END_BASE_URL
})

instance.interceptors.response.use(response => {
    return response
}, function (error) {
    if (error.response.status === 404) {
        return { status: error.response.status }
    }
    return Promise.reject(error.response)
})

// -- Helper functions

function bearerAuth(token: string) {
    return `Bearer ${token}`
}