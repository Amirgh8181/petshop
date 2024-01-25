import { create } from "zustand";
import { centerConterntSheltersAndClinicsCard, clinicAndSheltersData } from "@/types";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// Define the interface of the Cart state
interface State {
    ClinicsData: clinicAndSheltersData[]
}

const centerContent: centerConterntSheltersAndClinicsCard[] = [
    { text: "1631 McQueeney Rd, New Braunfels, TX 78130", icon: <FaLocationDot /> },
    { text: "+1 2233445566", icon: <FaPhoneAlt /> },
    { text: "Dr. Jake Grey", icon: <FaUserDoctor /> },
]

const descc:string="The passage experienced a surge in popularity during the 1960s when Letraset used .it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."

// Initialize a default state
const INITIAL_STATE: State = {
    ClinicsData: [
        { id: '1', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
        { id: '2', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
        { id: '3', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
        { id: '4', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
        { id: '5', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
        { id: '6', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
        { id: '7', title: "Veterinarian New Braunfels", description:descc, image: "/images/Clinics/clinicItemImg.png", linkHref: "/Clinics/", centerDetails: centerContent },
    ]
}

// Create the store with Zustand, combining the status interface and actions
export const useClinicsItems = create<State>(() => ({
    ClinicsData: INITIAL_STATE.ClinicsData,
}))