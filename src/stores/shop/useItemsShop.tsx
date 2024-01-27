import { create } from "zustand";
import { ShopItem } from "@/types";
import { persist } from "zustand/middleware";
import axios from "axios";

// Define the interface of the Cart state
interface State {
    products: ShopItem[],
    fetchProductItems: () => void
}

// Create the store with Zustand, combining the status interface and actions
export const useItemsShop = create<State>()(
    persist(
        (set) => ({
            products: [],
            fetchProductItems: async () => {
                const req = await axios.get("http://localhost:5000/api/products",
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                ).then(
                    (data) => {
                        set({
                            products: data.data
                        })
                    }
                ).catch(
                    err => { throw new Error("somthing went wrong") }
                )


            }
        }),
        {
            name: "ShopItem"
        }
    )
)