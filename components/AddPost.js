import React, { useState } from "react";
import { Web3Storage, File } from "web3.storage";
const AddPost = () => {
  const [files, setFiles] = useState([]);
  const handleFile = (e) => {
    console.log("files", files);
    const fileList = e.target.files[0];
    console.log("file to be added", fileList);
    setFiles([...files, fileList]);
  };

  const removeImage = (i) => {
    console.log("files", files);
    console.log(`Deleted ${i}`);
    setFiles(files.filter((x) => x.name !== i));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadFiles = [];
      for(let file of files){
        uploadFiles.push(new File([file], Date.now()));
      }
      console.log(uploadFiles);
      const storage = new Web3Storage({ token });
      const cid = await storage.put(uploadFiles);
      console.log("Content added with CID:", cid);
      // navigate("/pay");
      window.location.replace("https://buy.stripe.com/test_bIY16J3VGd4t1dScMM");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 relative text-white ">
      <h1>Upload files</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap max-w-[600px] gap-8"
      >
        <div className="w-full">
          <p>Upload Files</p>
          <div className="flex justify-center w-full items-center px-3">
            <div className="rounded-lg shadow-xl bg-transparent w-full">
              <div className="m-4 w-full">
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
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
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
            className="bg-purple-500 px-3 py-2 rounded-lg m-4"
            type="submit"
          >
            Submit files
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
