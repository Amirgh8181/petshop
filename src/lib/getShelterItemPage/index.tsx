import axios from 'axios'

const getShelterItemPage =async (id:string) => {
    const req = await axios.get(`http://localhost:5000/api/shelters/${id}`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getShelterItemPage