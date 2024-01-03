import { create } from "zustand"

const useProfile = create((set) => ({
  profiledata: null,
  setProfiledata: (data) => {
    set((state) => ({ profiledata: data }))
  },
}))

export default useProfile
