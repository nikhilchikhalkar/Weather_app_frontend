import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

function Wheather() {
  const [city, setcity] = useState([]);
  const [search, setsearch] = useState("");
  const [loader, setloader] = useState(false);

  const apikey = `0a330b728fc9f2361035ef07d2939a46`;
  const fetchdata = async (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Enter Any City Name ");
      return;
    }
    try {
      setloader(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&timezone_offset=UTC&appid=${apikey}`
      );
    //   console.log(data);
      // const city = data;
      setcity(data);
      setloader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [search]);
  return (
    <>
      <div className="w-[90%] self-center align-content-center  md:w-[50%] mx-auto mt-10">
        <article className=" w-fit rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition ">
          <div className="rounded-[10px] bg-slate p-4 !pt-20 sm:p-6">
            <div>
              <h1 className="text-3xl text-center mb-4">Wheather App</h1>
            </div>
            <div>
              <div className=" md:w-[32rem] mx-auto flex">
                <input
                  type="text"
                  id="Search"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                  placeholder="Enter any city name..."
                  className="w-full rounded-md p-2 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                />
                <div>
                  <button
                    onClick={fetchdata}
                    className=" group inline-block rounded-md mx-2 md:mx-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:p-[1px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  >
                    <span className="block rounded-md bg-white px-3 md:px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                      Search
                    </span>
                  </button>
                </div>
              </div>
              {loader &&   <LoadingSpinner /> }
              <div className="grid grid-cols-1 text-center md:grid-cols-2 w-full md:w-[40rem] mx-auto mt-12 mb-10 self-center">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  City Name:- <span>{city?.name}</span>
                </h3>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Description:- <span>{city?.weather?.[0]?.description}</span>
                </h3>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Temp:- <span>{city?.main?.temp}</span>
                </h3>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Humidity:- <span>{city?.main?.humidity}</span>
                </h3>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Max_Temp:- <span>{city?.main?.temp_max}</span>
                </h3>
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Min_Temp:- <span>{city?.main?.temp_min}</span>
                </h3>
              </div>
            </div>

            {/* <div className="mt-4 flex flex-wrap gap-1">
             
            </div> */}
          </div>
        </article>
      </div>
    </>
  );
}

export default Wheather;
