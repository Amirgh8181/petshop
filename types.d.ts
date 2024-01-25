export interface ShopItem {
    id: string
    title: string
    description: string
    price: string
    category: string,
    image:string,
   }
export interface CartItem {
    id: string
    title: string
    description: string
    price: string
    category: string,
    image:string,
    count:number
   }

   export interface centerConterntSheltersAndClinicsCard {
    text: string,
    icon: React.JSX.Element
  }

  export interface clinicAndSheltersData {
    id: string,
    title:string,
    description:string,
    image: string
    linkHref:string
    centerDetails: centerConterntSheltersAndClinicsCard[]
  }