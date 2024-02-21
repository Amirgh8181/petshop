import axios from 'axios'
import React from 'react'

const getProducts =async () => {
    try {
        const req = await axios.get('http://localhost:5000/api/products')
        return req.data
    } catch (e) {
        throw new Error("please first run api and reload page")
    }
}

export default getProducts