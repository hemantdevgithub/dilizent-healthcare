import CompletedProjectsSlider from "../components/Home/CompletedProjectsSlider/CompletedProjectsSlider";
import UpcomingBlogs from "../components/Home/EventsOrBlogs/UpcomingBlogs";
import userAuth from "../hooks/useAuth";
import { shallow } from "zustand/shallow";
import { GetData } from "../Api/Get";
import { useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";
import { getCookie } from "../coookie/getCookie.js";
import ProjectMap from "../components/Home/ProjectMap/ProjectMap";
import ProjectTalentSection from "../components/Home/ProjectTalentSection/ProjectTalentSection";
import Hero from "../components/Home/Hero";
import OurServices from "../components/Home/OurServices/OurServices";

const Home = () => {
  const { setisAuth, setUser, isAuth, userCredentials } = userAuth(
    (state) => ({
      setisAuth: state.setisAuth,
      setUser: state.setUser,
      isAuth: state.isAuth,
      userCredentials: state.userCredentials,
    }),
    shallow
  );
  const Fetchuser = useCallback(async () => {
    try {
      // Fetching the user from the token
      const token = getCookie();
      const user = await GetData("/api/user/profile", token.toString());
      console.log(user);

      // Checking the valid data is present or not in res
      if (user?.status === 200 || (201 && user?.statusText === "OK")) {
        setisAuth();
        setUser(user?.data);
      } else if (user?.response?.status === 401) {
        const deleteCookie = await Postdata("/api/auth/logout");
        localStorage.clear();
      }
    } catch (error) {
      toast.error("server error");
    }
  }, []);

  useEffect(() => {
    if (isAuth && userCredentials === null && getCookie()) {
      Fetchuser();
    } else if (!isAuth && userCredentials === null && getCookie()) {
      Fetchuser();
    }
  }, [isAuth]);

  return (
    <>
      <Hero />
      {/* <ProjectMap /> */}
      {/* <ProjectTalentSection /> */}
      <OurServices />
      <CompletedProjectsSlider />
      <UpcomingBlogs />
    </>
  );
};

export default Home;
