import ShopItemSinglePageContainer from '@/components/ShopItemSinglePage';
import axios from 'axios';
import Image from 'next/image';


const ProductPage = async ({ params }: { params: { ProductPage: string } }) => {
    const req = await axios.get(`http://localhost:5000/api/products/${params.ProductPage}`,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    if (!req.data) {
        throw new Error("somthing went wrong")
    }

    return (
        <>
            <ShopItemSinglePageContainer product={req.data} />
        </>
    )
}

export default ProductPage


