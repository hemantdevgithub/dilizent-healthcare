export const getCookie = () => {
  const token = localStorage.getItem("token")
  return token ? token : false
}
