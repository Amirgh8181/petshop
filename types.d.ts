import { AuthInput } from '@/types';
export interface ShopItem {
  _id: string,
  name: string,
  category: string,
  price: string,
  shortDescription: string,
  description: string,
  attachmentFile: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}
export interface CartItem extends ShopItem {
  count: number
}



export interface clinicAndSheltersData {
  _id: string,
  name: string,
  address:string,
  phone:string,
  doctorName:string,
  shortDescription: string,
  doctorDescription: string,
  attachmentFile: string,
  createdAt: string,
  updatedAt: string,
  __v: number
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
  registerVal: "email" | "password" | "name",
}

export interface tabsDetailstype {
  key: string,
  title: string,
  description?: string
}