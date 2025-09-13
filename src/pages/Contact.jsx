import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaMapLocationDot } from "react-icons/fa6";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Contact = () => {
  return (
    <section className="mx-auto container mt-20 dark:text-white mb-3">
      <h1 className="text-4xl text-center font-bold mb-4 ">
        Let's <span className="text-pink-700">Connect</span>
      </h1>

      <div className="flex justify-between">
<div className="">
  <div className="flex items-center gap-4  p-4 rounded">
    <div className="text-pink-700 text-3xl">
      <SlEnvolopeLetter />
    </div>
    <div>
      <p className="font-bold text-xl sm:text-2xl">Mail</p>
      <p className="text-gray-400 text-base">duwalbina2@gmail.com</p>
    </div>
  </div>

  <div className="flex items-center gap-4 p-4 rounded">
    <div className="text-pink-700 text-3xl">
      <FaMapLocationDot />
    </div>
    <div>
      <p className="font-bold text-xl sm:text-2xl">Location</p>
      <p className="text-gray-400 text-base">Jhaukhel, Bhaktapur</p>
    </div>
  </div>

  <SocialMediaIcons/>
</div>

        <div className="flex items-center justify-center">
          <form className=" w-full max-w-lg   text-center">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 mt-5 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 mt-5 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Enter your message "
              className="w-full p-2 mt-5 border border-gray-300 rounded-md"
            />
            <div className="flex">

            <button className="bg-pink-700  text-white p-2 mt-5 rounded-md">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
