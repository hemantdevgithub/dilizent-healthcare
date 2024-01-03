import Container from "../components/Container/Container";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PostData } from "../Api/post.js";
import useProfile from "../hooks/useProfile";
import { GetData } from "../Api/Get";
import { shallow } from "zustand/shallow";
import { getCookie } from "../coookie/getCookie";
import { NavLink } from "react-router-dom";

const UploadProfile = () => {
  const { profiledata, setProfiledata } = useProfile(
    (state) => ({
      setProfiledata: state.setProfiledata,
      profiledata: state.profiledata,
    }),
    shallow
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isButton, setisButton] = useState(false);
  const token = getCookie().toString();

  const fetchuserdb = async () => {
    try {
      const user = await GetData("/api/user/profile/info", token);

      if (user?.status === 200 || user?.status === 201) {
        setProfiledata(user?.data?.data);
        setIsLoading(true);
        setisButton(true);
      } else {
        setisButton(false);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setisButton(false);
    }
  };

  useEffect(() => {
    if (profiledata === null && getCookie()) {
      fetchuserdb();
    } else {
      setisButton(true);
      setIsLoading(true);
    }
  }, [profiledata]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", e.target[0].files[0]);
    formData.append("first_name", e.target[1].value);
    formData.append("last_name", e.target[2].value);
    formData.append("dob", e.target[3].value);
    formData.append("gender", e.target[4].value);

    try {
      const apidata = await PostData("/api/user/profile/add", formData, token);

      if (apidata.status === 200 || apidata?.status === 201) {
        toast.success("user profile created succefully");
        setProfiledata(apidata?.data?.data);
        setIsLoading(true);
        setisButton(true);
      } else {
        setIsLoading(false);
        setisButton(false);
      }
    } catch (error) {
      setIsLoading(false);
      setisButton(false);
    }
  }, []);

  return (
    <Container>
      <div className="my-20">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="space-y-12">
            <div className=" pb-12">
              <h2 className="text-3xl  font-semibold leading-7 text-gray-700 text-center mb-10">
                Upload Personal Information
              </h2>

              {/* upload profile picture */}
              {profiledata?.profile_image ? (
                <>
                  <img
                    src={profiledata?.profile_image}
                    alt="null-user"
                    className="w-[6rem] h-[6rem] cover rounded-full"
                  />
                </>
              ) : (
                <>
                  <input
                    disabled={isLoading}
                    type="file"
                    required={true}
                    name="file"
                    className=" disabled:cursor-not-allowed"
                  />
                </>
              )}

              <div className="mt-12 flex flex-col gap-5 max-w-xl">
                <label className="block">
                  <span className="text-gray-700">First name</span>
                  {profiledata ? (
                    <span className="text-gray-700  font-semibold text-[1.2rem] ml-2">
                      {profiledata?.first_name}
                    </span>
                  ) : (
                    <input
                      type="text"
                      required
                      disabled={isLoading}
                      className="mt-1 block w-full disabled:cursor-not-allowed rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                      placeholder=""
                    />
                  )}
                </label>

                <label className="block">
                  <span className="text-gray-700">Last name</span>
                  {profiledata ? (
                    <span className="text-gray-700  font-semibold text-[1.2rem] ml-2">
                      {profiledata?.last_name}
                    </span>
                  ) : (
                    <input
                      type="text"
                      required
                      disabled={isLoading}
                      className="mt-1 block disabled:cursor-not-allowed w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                      placeholder=""
                    />
                  )}
                </label>

                <label className="block">
                  <span className="text-gray-700">Date of Birth</span>
                  {profiledata ? (
                    <span className="text-gray-700  font-semibold text-[1.2rem] ml-2">
                      {profiledata?.dob}
                    </span>
                  ) : (
                    <input
                      type="date"
                      required
                      disabled={isLoading}
                      className="mt-1 block w-full rounded-md disabled:cursor-not-allowed bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  )}
                </label>

                <label className="block">
                  <span className="text-gray-700">Gender</span>
                  {profiledata ? (
                    <span className="text-gray-700  font-semibold text-[1.2rem] ml-2">
                      {profiledata?.gender}
                    </span>
                  ) : (
                    <select
                      className="block w-full mt-1 rounded-md bg-gray-100 border-transparent disabled:cursor-not-allowed focus:border-gray-500 focus:bg-white focus:ring-0"
                      disabled={isLoading}
                      required
                    >
                      <option defaultValue="Gender">Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end gap-x-6 max-w-xl">
            {/* function for cancel */}
            {isButton ? (
              <NavLink to="/profile/update">want to edit profile..</NavLink>
            ) : (
              <>
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>

                <button className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Upload
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};
export default UploadProfile;
