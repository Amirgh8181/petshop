import { create } from "zustand";
import { ShopItem } from "@/types";



   
   // Define the interface of the Cart state
   interface State {
    products: ShopItem[]
   }
   
   
   // Initialize a default state
   const INITIAL_STATE: State = {
    products: [
        {id:1,title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:1,title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health and bath",image:"/images/Shop/shopitem2.png"},
        {id:1,title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:1,title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:1,title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:1,title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"}
    ],
   }
   
   // Create the store with Zustand, combining the status interface and actions
   export const useItemsStore = create<State>((set, get) => ({
    products: INITIAL_STATE.products,
   }))