import axios from "axios";


const GetShopItems = async () => {
    try {

        const req = await axios.get("http://localhost:5000/api/products",
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        console.log(req.data);
        
        return req.data
    }
    catch (e) {
        console.log(e)
    }
};

export default GetShopItems;