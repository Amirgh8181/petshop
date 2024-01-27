import { create } from "zustand";
import { clinicAndSheltersData } from "@/types";
import axios from "axios";
import { persist } from "zustand/middleware";
// Define the interface of the Cart state
interface State {
    SheltersDataSinglePage: clinicAndSheltersData
    fetchShelterSingleItems: (arg: string) => void
}


// Create the store with Zustand, combining the status interface and actions
export const useSinglePageShelters = create<State>((set) => {
    return {
        SheltersDataSinglePage: {
            _id: "",
            name: "",
            address: "",
            phone: "",
            doctorName: "",
            shortDescription: "",
            doctorDescription: "",
            attachmentFile: "",
            createdAt: "",
            updatedAt: "",
            __v: 0
        },
        fetchShelterSingleItems: async (arg) => {

            const req = await axios.get(`http://localhost:5000/api/shelters/${arg}`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            set({
                SheltersDataSinglePage: req.data,
            });
            console.log(req.data);
        }
    }

})
