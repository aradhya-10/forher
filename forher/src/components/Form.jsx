import React, { useState } from "react";
// const { Revise } = require("revise-sdk");
// const revise = new Revise({ auth: process.env.REVISE_AUTHKEY });

const Form = (imgsrc) => {
  var ddetail = {
    Name: "",
    Brand: "",
    Date: "",
    Metadata: "",
    Duration: 0,
  };

  const [details, setDetails] = useState(ddetail);

  async function run(detail) {
    // write your code here - this is where the next two snippets of code should be pasted
    // const collection = await revise.addCollection({
    //   name: detail.Brand,
    //   uri: detail.Name,
    // });
    // const nft = await revise.addNFT(
    //   {
    //     image: imgsrc,
    //     name: detail.Name,
    //     tokenId: "1",
    //     description: detail.Metadata,
    //   },
    //   [{ start: ""}, {duration: detail.Duration}],
    //   collection.id
    // );

    // console.log(nft);
  }

  function submitted(e) {
    const name = document.getElementById("floating_event_name");
    const brand = document.getElementById("floating_brand_name");
    const date = document.getElementById("floating_date");
    const metadata = document.getElementById("floating_metadata");
    const day = document.getElementById("floating_days");
    const hour = document.getElementById("floating_hours");
    const minute = document.getElementById("floating_minutes");
    const duration = minute + (day * 24 + hour) * 60;
    ddetail = {
      Name: name.value,
      Brand: brand.value,
      Date: date.value,
      Metadata: metadata.value,
      Duration: duration,
    };
    setDetails(ddetail);
    //
    console.log(details.Name);
  }
  return (
    <div className="flex m-8 px-12">
      <form className="container flex-1 backdrop-filter backdrop-blur-sm bg-white bg-opacity-20 my-12 mx-auto p-8 lg:w-8/12 rounded-lg border-2 z-[5]">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="floating_brand_name"
            id="floating_brand_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_brand_name"
            className="peer-focus:font-medium absolute text-sm text-white  durawhite transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:swhite peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Brand name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-6/12 group date datepicker">
          <input
            type="date"
            name="floating_date"
            datepicker
            id="floating_date"
            className="block py-2.5 px-0 w-full  text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer form-control rounded"
            placeholder="dd/mm/yyyy"
            required
          />
          <label
            htmlFor="floating_date"
            className=" peer-focus:font-medium absolute text-sm text-white durawhite transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white  peer-placeholder-shown:swhite peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date of the incident{" "}
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group text-white">
          Event Description
          <div className="text-white relative bg-[rgb(116,104,126)] bg-opacity-40 flex-col mt-4 rounded-lg py-4 px-8">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_metadata"
                id="floating_metadata"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_metadata"
                className="peer-focus:font-medium absolute text-sm text-white  durawhite transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:swhite peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Metadata
              </label>
            </div>
            Duration
            <div className="m-0 flex items-center text-center">
              <div className="relative z-0 mb-6 w-3/12 group">
                <div className="px-4 relative">
                  <input
                    type="number"
                    min="0"
                    name="floating_days"
                    id="floating_days"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 placeholder:text-white"
                    placeholder="Days"
                    required
                  />
                </div>
              </div>

              <div className="relative z-0 mb-6 w-3/12 group">
                <div className="px-4 relative">
                  <input
                    type="number"
                    min="0"
                    name="floating_hours"
                    id="floating_hours"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 placeholder:text-white"
                    placeholder="Hours"
                    required
                  />
                </div>
              </div>
              <div className="relative z-0 mb-6 w-3/12 group">
                <div className="px-4 relative">
                  <input
                    type="number"
                    min="0"
                    name="floating_minutes"
                    id="floating_minutes"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 placeholder:text-white"
                    placeholder="Minutes"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-white bg-pink-400  hover:bg-pink-600 transition durawhite focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:focus:ring-white"
          onClick={submitted}
          onSubmit={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;