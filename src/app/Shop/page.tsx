import ShopHero from '@/components/Shop/ShopHero'
import ProductPreview from '@/components/Shop/ShopItem'
import Category from '@/components/Shop/ShowCategory'
import OtherSection from '@/components/Shop/othersection'
import getShopItems from '@/lib/getShopItems'

const Shop =async () => {
const products=await getShopItems()

  return (
    <div className='space-y-10'>
      <ShopHero />
      <Category />
      <ProductPreview products={products} />
      <OtherSection />
    </div>
  )
}

export default Shop