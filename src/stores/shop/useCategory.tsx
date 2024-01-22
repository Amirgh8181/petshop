import { ShopItem } from "@/types";
import { create } from "zustand";
import { useItemsStore } from "./useItemsShop";

// Define the interface of the Cart state
interface State {
    category: string,
    categoryItem: ShopItem[]
    setNewCateg: (arg: string) => void;
    setNewCategItem: (arg: ShopItem[]) => void;
}


// Create the store with Zustand, combining the status interface and actions
export const useCategory = create<State>((set) => ({
    category: "All",
    categoryItem: [],
    setNewCateg: (arg) => {
        set({
            category: arg
        })
    },
    setNewCategItem: (arg) => {
        set({
            categoryItem: arg
        })
    },

    
}))