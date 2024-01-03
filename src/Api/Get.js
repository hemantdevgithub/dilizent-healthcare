import axios from "axios"

const url = import.meta.env.VITE_REACT_SERVER_URL

export const GetData = async (endpoint, token) => {
  let headers = {
    Authorization: `Bearer ${token}`,
  }

  try {
    const apidata = await axios.get(url + endpoint, { headers })

    return apidata
  } catch (error) {
    return error
  }
}
