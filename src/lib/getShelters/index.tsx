import axios from 'axios'

const getShelters = async () => {
    const req = await axios.get("http://localhost:5000/api/shelters",
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getShelters