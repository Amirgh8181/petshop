import { CartItem, ShopItem } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";


// Define the interface of the Cart state
interface State {
    CartItem: CartItem[]
    totalPrice: number,
    setCartItem: (arg: ShopItem) => void;
    setIncrement: (arg: string) => void;
    setDecrement: (arg: string) => void;
    setDeleteItem: (arg: string) => void;
}


// Create the store with Zustand, combining the status interface and actions
export const useCartItems = create<State>()(
    persist(
        (set) => ({
            CartItem: [],
            totalPrice: 0,
            setCartItem: (arg) => {
                const cart = useCartItems.getState().CartItem
                let totalPri: number = useCartItems.getState().totalPrice;
                //tabdil string ba $ dar avalesh be adad
                const argPrice: number = Number(arg.price.replace(/[^0-9\.]+/g, ""));
                // baray negah dashtan gheymat har product dar halghe for
                let itemPrice: number;
                // baray neshan dadan inke product voojod darad va agar vojood dasht true mishavad
                let isIncludeItem: boolean = false

                if (cart.length >= 1) {
                    //tak tak item hara check mikonad va agar arg ma ba item barabar bood  miad va az list 
                    //hazf mikone va gheymatesham az totalprice kam mikone va ba flag neshoon mide ke item dar 
                    //list voojood dare
                    for (let i = 0; i < cart.length; i++) {
                        if (arg._id === cart[i]._id) {
                            isIncludeItem = true;
                            itemPrice = Number(cart[i].price.replace(/[^0-9\.]+/g, ""))
                            totalPri -= cart[i].count * itemPrice
                            cart.splice(i, 1)
                            set({
                                CartItem: [...cart],
                                totalPrice: totalPri,
                            })
                            return
                        }
                    }
                    //agar flag dar for true nashavad yani arg dar list item ha mojood naboode va bayad be list
                    //ezafe shavad va choon dar type shopItem[] ast bayad ye field count be arg ezafe konim
                    if (!isIncludeItem) {
                        set({
                            CartItem: [...cart, { ...arg, count: 1 }],
                            totalPrice: totalPri + argPrice,
                        })
                    }

                }

                // dar soorati ke hich item dar list moojood nabashad in marhale anjam mishavad
                else {
                    set({
                        CartItem: [{ ...arg, count: 1 }],
                        totalPrice: argPrice,
                    })
                }
            },
            setIncrement: (arg) => {
                const cart = useCartItems.getState().CartItem
                let totalPri: number = useCartItems.getState().totalPrice;
                let argPrice: number

                for (let i = 0; i < cart.length; i++) {
                    if (arg === cart[i]._id) {
                        cart[i].count++;
                        argPrice = Number(cart[i].price.replace(/[^0-9\.]+/g, ""));
                        totalPri += argPrice
                        set({
                            CartItem: [...cart],
                            totalPrice: totalPri
                        })
                        return
                    }
                }
            },
            setDecrement: (arg) => {
                const cart = useCartItems.getState().CartItem
                let totalPri: number = useCartItems.getState().totalPrice;
                let argPrice: number;

                for (let i = 0; i < cart.length; i++) {
                    if (arg === cart[i]._id) {
                        argPrice = Number(cart[i].price.replace(/[^0-9\.]+/g, ""));
                        if (cart[i].count === 1) {
                            totalPri -= argPrice
                            cart.splice(i, 1)
                        } else {
                            totalPri -= argPrice
                            cart[i].count--;
                        }

                        set({
                            CartItem: [...cart],
                            totalPrice: totalPri
                        })
                        return
                    }
                }
            },
            setDeleteItem: (arg) => {
                const cart = useCartItems.getState().CartItem
                let totalPri: number = useCartItems.getState().totalPrice;
                let argPrice: number;

                for (let i = 0; i < cart.length; i++) {
                    if (arg === cart[i]._id) {
                        argPrice = Number(cart[i].price.replace(/[^0-9\.]+/g, ""));
                        totalPri -= cart[i].count * argPrice
                        cart.splice(i, 1)
                        set({
                            CartItem: [...cart],
                            totalPrice: totalPri,
                        })
                        return
                    }
                }
            }
        }),
        {
            name: "CartItem"
        }
    )
)
