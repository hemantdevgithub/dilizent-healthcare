import React, { useState } from "react";
import { BiCloudUpload } from "react-icons/bi";

export default function UploadProfilePhoto() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // handle submit

  const handleSubmit = () => {
    console.log(selectedFile);
  };
  return (
    <form
      className="
    flex
    flex-col
    gap-5
    items-start
    "
    >
      <h3 className="block text-sm font-medium leading-6 text-gray-900">
        Select Your Profile Picture
      </h3>
      <div className="flex items-center justify-start w-full rounded-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {selectedFile ? (
              <div className="mb-2 text-sm  text-gray-500 dark:text-gray-400">
                <p>Selected file:</p>
                <p className="font-bold">{selectedFile.name}</p>
              </div>
            ) : (
              <>
                <BiCloudUpload className="text-4xl" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG, or GIF (MAX. 800x400px)
                </p>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            required
          />
        </label>
      </div>

      {/* button */}
      {selectedFile && (
        <button
          className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="button"
          onClick={handleSubmit}
        >
          Upload Image
        </button>
      )}
    </form>
  );
}
