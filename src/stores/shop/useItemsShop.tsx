import { create } from "zustand";
import { ShopItem } from "@/types";
import { persist } from "zustand/middleware";

   // Define the interface of the Cart state
   interface State {
    products: ShopItem[],
   }
   
   // Initialize a default state
   const INITIAL_STATE: State = {
    products: [
        {id:'1',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:'2',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health",image:"/images/Shop/shopitem2.png"},
        {id:'3',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:'4',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:'5',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:'6',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"},
        {id:'7',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:'8',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health",image:"/images/Shop/shopitem2.png"},
        {id:'9',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:'10',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:'11',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:'12',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"},
        {id:'13',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:'14',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health",image:"/images/Shop/shopitem2.png"},
        {id:'15',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:'16',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:'17',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:'18',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"},
        {id:'19',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:'20',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health",image:"/images/Shop/shopitem2.png"},
        {id:'21',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:'22',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:'23',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:'24',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"},
        {id:'25',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:'26',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health",image:"/images/Shop/shopitem2.png"},
        {id:'27',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:'28',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:'29',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:'30',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"},
        {id:'31',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Toys",image:"/images/Shop/shopitem1.png"},
        {id:'32',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Health",image:"/images/Shop/shopitem2.png"},
        {id:'33',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Food",image:"/images/Shop/shopitem3.png"},
        {id:'34',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Treats",image:"/images/Shop/shopitem1.png"},
        {id:'35',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Furnitures",image:"/images/Shop/shopitem2.png"},
        {id:'36',title:"Pet Toy for dogs",description:"Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",price:"$12.65",category:"Beds",image:"/images/Shop/shopitem3.png"}
    ],
   }
   
   // Create the store with Zustand, combining the status interface and actions
   export const useItemsStore = create<State>()(
    persist(
        (set) => ({
            products: INITIAL_STATE.products,
        }),
        {
            name: "ShopItem"
        }
    )
)