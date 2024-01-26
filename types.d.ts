import { AuthInput } from '@/types';
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

  export interface AuthInput {
    key: string,
    type: string,
    icon: React.ReactNode,
    err: string | undefined
  }
  export interface LoginInput extends AuthInput {
    registerVal: "email" | "password",
}
  export interface SignUpInput extends AuthInput {
    registerVal: "email" | "password"|"name",
}

export interface tabsDetailstype{
  key:string,
  title:string,
  description:string
}