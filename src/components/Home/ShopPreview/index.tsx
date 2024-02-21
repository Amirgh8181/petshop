import Slider from '../../UI/Slider/Slider';
import { ShopItem } from '@/types';
import Link from 'next/link';
import getProducts from '@/lib/getProducts';
import PreviewSectionsHeader from '@/components/UI/previewHeader';


const ShopPreview = async () => {
    let req: ShopItem[] = await getProducts()

    return (
        <section id="ShopPreview" className='w-full mb-12'>
            <PreviewSectionsHeader previewLink='/Shop' previewSectionName='Shop' />
            <Slider data={req.slice(0, 16)} />
        </section>
    )
}

export default ShopPreview