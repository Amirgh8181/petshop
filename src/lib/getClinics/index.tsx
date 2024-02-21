import axios from 'axios'

const getClinics =async () => {

    const req = await axios.get(`http://localhost:5000/api/clinics`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getClinics