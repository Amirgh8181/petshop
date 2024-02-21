import axios from 'axios'

const getClinicItemPage =async (id:string) => {

    const req = await axios.get(`http://localhost:5000/api/clinics/${id}`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getClinicItemPage