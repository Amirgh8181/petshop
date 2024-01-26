import axios from "axios";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const getShopItems = async () => {

    try {
        const req = await axios.get("http://localhost:5000/api/products",
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        console.log(req.data);

        return req;
    }
    catch (e) {
        console.log('some thing went wrong !')
    }
};

export default getShopItems;