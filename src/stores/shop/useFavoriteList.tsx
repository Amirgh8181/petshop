import FavoriteList from "@/app/FavoriteList/page";
import { ShopItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


// Define the interface of the Cart state
interface State {
    FavoriteList: ShopItem[]
    setFavoriteList: (arg: ShopItem) => void;
}


// Create the store with Zustand, combining the status interface and actions
export const useFavoriteList = create<State>()(
    persist(
        (set) => ({
            FavoriteList: [],
            
            setFavoriteList: (arg) => {
                const favor = useFavoriteList.getState().FavoriteList
                
                if (favor.includes(arg)) {
                    for (let i = 0; i < favor.length; i++) {
                        if (arg._id === favor[i]._id) {
                            favor.splice(i, 1)
                        }
                    }
                    set({
                        FavoriteList: [...favor]
                    })
                }
                else {
                    set({
                        FavoriteList: [...favor, arg]
                    })
                }
                console.log(favor);
            }
        }),
        {
            name: "FavoriteList"
        }
    )
)

