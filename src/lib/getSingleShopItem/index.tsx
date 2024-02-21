import axios from 'axios'

const getSingleShopItem = async (id: string) => {
    const req = await axios.get(`http://localhost:5000/api/products/${id}`,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    if (!req.data) {
        throw new Error("somthing went wrong")
    }
    return req.data;
}

export default getSingleShopItem