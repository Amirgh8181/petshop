import { create } from "zustand";
import { clinicAndSheltersData } from "@/types";
import axios from "axios";
import { persist } from "zustand/middleware";
// Define the interface of the Cart state
interface State {
  SheltersData: clinicAndSheltersData[]
  fetchSheltersItems: () => void
}

// Create the store with Zustand, combining the status interface and actions
export const useSheltersItems = create<State>()(
  persist(
    (set) => ({
      SheltersData: [],
      fetchSheltersItems: async () => {
        const req = await axios.get("http://localhost:5000/api/shelters",
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        ).then(
          (data) => {
            set({
              SheltersData: data.data
            })
          }
        ).catch(
          err => { throw new Error("somthing went wrong") }
        )


      }
    }),
    {
      name:"shelters"
    }
    ))