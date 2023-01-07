import React, { useState } from "react";
import process from 'process';
import { Web3Storage, getFilesFromPath } from 'web3.storage';

require('dotenv').config();
const Upload = () => {

  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();

  const handleFile = (e) => {
    setMessage("");
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFile((old) => {
            return [...old, reader.result];
          });
          // setImagePreview((old) => { return [...old, reader.result] });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const token = process.env.WEB3_STORAGE_TOKEN;

      // if (!token) {
      //   return console.error('A token is needed. You can create one on https://web3.storage');
      // }
      // const uploads = [];
      // const storage = new Web3Storage({ token });
      // const allFiles = [];

      // for (const path of uploads) {
      //   const pathFiles = await getFilesFromPath(path);
      //   allFiles.push(...pathFiles);
      // }
      // console.log(`Uploading ${files.length} files`);
      // const cid = await storage.put(files);
      // console.log('Content added with CID:', cid);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 relative min-h-screen text-white  ">
      <form>
        <div className="w-full">
          <p>Upload Images</p>
          <div className="flex justify-center w-full items-center px-3">
            <div className="rounded-lg shadow-xl bg-transparent w-full">
              <div className="m-4 w-full">
                <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                  {message}
                </span>
                <div className="flex  w-full">
                  <label className="flex cursor-pointer flex-col border-2 rounded-md border-dashed">
                    <div className="flex flex-col items-center justify-center p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Select a photo
                      </p>
                    </div>
                    <input
                      type="file"
                      name="images"
                      className="h-12 font-semibold w-[60%] hidden"
                      multiple
                      required
                      onChange={handleFile}
                    />
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {files.map((ele, index) => {
                      return (
                        <div key={index} className="overflow-hidden relative">
                          <i
                            onClick={() => {
                              removeImage(ele.name);
                            }}
                            className="text-white mdi mdi-close absolute right-1 hover:text-white cursor-pointer z-[20]"
                          >
                            x
                          </i>
                          <img
                            className="h-20 w-20 rounded-md"
                            src={ele}
                            alt="uploads"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white">
          <button
            onClick={handleSubmit}
            className="bg-pink-500 p-3 rounded m-4"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
