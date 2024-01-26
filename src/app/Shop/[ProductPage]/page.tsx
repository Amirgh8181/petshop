import ShopItemSinglePageContainer from '@/components/ShopItemSinglePage';
import Image from 'next/image';


const ProductPage = ({ params }: { params: { ProductPage: string } }) => {


    return (
        <>
            <ShopItemSinglePageContainer productId={params.ProductPage} />
        </>
    )
}

export default ProductPage


/*
            
*/