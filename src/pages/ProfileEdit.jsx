import Container from "../components/Container/Container";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PutData } from "../Api/put.js";
import useProfile from "../hooks/useProfile";
import { shallow } from "zustand/shallow";
import { PostData } from "../Api/post";
import { getCookie } from "../coookie/getCookie";

const UploadProfile = () => {
  const router = useNavigate();

  const { profiledata, setProfiledata } = useProfile(
    (state) => ({
      setProfiledata: state.setProfiledata,
      profiledata: state.profiledata,
    }),
    shallow
  );

  const [isLoading, setIsLoading] = useState(true);
  const [isButton, setisButton] = useState(false);

  const [last_Name, setLastName] = useState(profiledata?.last_name);
  const [first_Name, setFirstName] = useState(profiledata?.first_name);
  const [getdob, setDob] = useState(profiledata?.dob);
  const [gender, setGender] = useState(profiledata?.gender);

  useEffect(() => {
    console.log(profiledata);
    setisButton(true);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", e.target[0].files[0]);
      formData.append("first_name", first_Name);
      formData.append("last_name", last_Name);
      formData.append("dob", getdob);
      formData.append("gender", gender);

      try {
        const apidata = await PostData(
          "/api/user/profile/update",
          formData,
          getCookie().toString()
        );

        if (apidata.status === 200 || apidata.status === 201) {
          toast.success(apidata?.data?.message);
          setProfiledata(formData);
          router(0);
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
    },
    [first_Name, last_Name, getdob, gender, setProfiledata]
  );

  const handleEdit = useCallback(() => {
    setIsLoading(false);
    setisButton(false);
  }, []);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <Container>
      <div className="my-20">
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="pb-12">
              <h2 className="text-3xl  font-semibold leading-7 text-gray-700 text-center mb-10">
                Upload Personal Information
              </h2>

              {profiledata?.profile_image && isButton ? (
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
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    className="mt-1 block w-full disabled:cursor-not-allowed rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder=""
                    value={first_Name}
                    onChange={handleFirstNameChange}
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">Last name</span>
                  <input
                    type="text"
                    required
                    disabled={isLoading}
                    className="mt-1 block disabled:cursor-not-allowed w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder=""
                    value={last_Name}
                    onChange={handleLastNameChange}
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">Date of Birth</span>
                  <input
                    type="date"
                    required
                    disabled={isLoading}
                    className="mt-1 block w-full rounded-md disabled:cursor-not-allowed bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    value={getdob}
                    onChange={handleDobChange}
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">Gender</span>
                  <select
                    className="block w-full mt-1 rounded-md bg-gray-100 border-transparent disabled:cursor-not-allowed focus:border-gray-500 focus:bg-white focus:ring-0"
                    disabled={isLoading}
                    required
                    value={gender}
                    onChange={handleGenderChange}
                  >
                    <option defaultValue="Gender">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end gap-x-6 max-w-xl">
            {isButton ? (
              <button
                onClick={handleEdit}
                className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => window.location.reload()}
                >
                  Cancel
                </button>

                <button className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Save changes..
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
