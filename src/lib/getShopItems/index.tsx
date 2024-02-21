import axios from "axios";


const getShopItems = async () => {
    try {

        const req = await axios.get("http://localhost:5000/api/products",
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )        
        return req.data
    }
    catch (e) {
        console.log(e)
    }
};

export default getShopItems;