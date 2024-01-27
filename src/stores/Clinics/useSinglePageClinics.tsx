import { create } from "zustand";
import { clinicAndSheltersData } from "@/types";
import axios from "axios";
import { persist } from "zustand/middleware";
// Define the interface of the Cart state
interface State {
    ClinicsDataSinglePage: clinicAndSheltersData
    fetchClinicSingleItems: (arg: string) => void
}


// Create the store with Zustand, combining the status interface and actions
export const useSinglePageClinics = create<State>((set) => {
    return {
        ClinicsDataSinglePage: {
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
        fetchClinicSingleItems: async (arg) => {

            const req = await axios.get(`http://localhost:5000/api/clinics/${arg}`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            set({
                ClinicsDataSinglePage: req.data,
            });
            console.log(req.data);
        }
    }

})
