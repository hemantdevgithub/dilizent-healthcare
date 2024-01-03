import { useNavigate, useLocation } from "react-router-dom"
import { getCookie } from "../coookie/getCookie.js"
import userAuth from "../hooks/useAuth"
import { shallow } from "zustand/shallow"
import useProfile from "../hooks/useProfile.js"
import { GetData } from "../Api/Get.js"
import { useEffect } from "react"

const ProfileMiddleware = ({ Component }) => {
  const { isAuth } = userAuth(
    (state) => ({
      isAuth: state.isAuth,
    }),
    shallow
  )

  const { profiledata, setProfiledata } = useProfile(
    (state) => ({
      setProfiledata: state.setProfiledata,
      profiledata: state.profiledata,
    }),
    shallow
  )

  const token = getCookie()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetData("/api/user/profile/info", token.toString())
      if (user?.status === 200 || user?.status === 201) {
        setProfiledata(user?.data?.data)
      } else {
        setProfiledata(null)
      }
    }

    if (profiledata === null) {
      fetchUser()
    }
  }, [profiledata, setProfiledata, token])

  const location = useLocation()
  const router = useNavigate()

  if (token && profiledata) {
    return <Component />
  } else {
    router("/")
    return null
  }
}
export default ProfileMiddleware
