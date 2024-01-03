import axios from "axios"

const url = import.meta.env.VITE_REACT_SERVER_URL

export const PostData = async (endpoint, data) => {
  const isData = data ? data : null
  const isToken = token ? true : false

  let headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  }

  try {
    const apiData = await axios.post(url + endpoint, isData, {
      withCredentials: true,
      headers: isToken ? { ...headers } : null,
    })

    return apiData
  } catch (error) {
    return error
  }
}
