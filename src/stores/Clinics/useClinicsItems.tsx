import { create } from "zustand";
import { clinicAndSheltersData } from "@/types";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { persist } from "zustand/middleware";
// Define the interface of the Cart state
interface State {
    ClinicsData: clinicAndSheltersData[]
    fetchClinicssItems: () => void
}
// Create the store with Zustand, combining the status interface and actions
export const useClinicsItems = create<State>()(
    persist(
        (set) => ({
            ClinicsData: [],
            fetchClinicssItems: async () => {
                const req = await axios.get("http://localhost:5000/api/shelters",
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                ).then(
                    (data) => {
                        set({
                            ClinicsData: data.data
                        })
                    }
                ).catch(
                    err => { throw new Error("somthing went wrong") }
                )


            }
        }),
        {
            name: "shelters"
        }
    ))