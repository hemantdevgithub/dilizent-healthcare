import axios from "axios"

const url = import.meta.env.VITE_REACT_SERVER_URL

export const PutData = async (endpoint, data, token) => {
  const isData = data ? data : null
  const isToken = token ? true : false

  let headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  }

  try {
    const apidata = await axios.put(url + endpoint, isData, {
      withCredentials: true,
      headers: isToken ? { ...headers } : null,
    })

    return apidata
  } catch (error) {
    return error
  }
}
