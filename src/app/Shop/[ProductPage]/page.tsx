import ShopItemSinglePageContainer from '@/components/ShopItemSinglePage';
import getSingleShopItem from '@/lib/getSingleShopItem';
import axios from 'axios';


const ProductPage = async ({ params }: { params: { ProductPage: string } }) => {
    
    const req = await getSingleShopItem(params.ProductPage)
    
    return (
        <>
            <ShopItemSinglePageContainer product={req} />
        </>
    )
}

export default ProductPage


