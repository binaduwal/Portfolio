import React from "react";
import { SlEnvolopeLetter } from "react-icons/sl";

const Contact = () => {
  return (
    <section className="mx-auto container mt-20 dark:text-white p-2 ">
    <div className="flex justify-between">

    <div >
      <h1 className="text-4xl font-bold text-center  ">
        Let’s <span className="text-pink-700">Connect</span>
      </h1>

      <div>
      <SlEnvolopeLetter />
      </div>

    </div>
      <div className="flex items-center justify-center">
        <form className=" w-full max-w-lg   text-center"  >
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
          <button className="bg-pink-700 text-white p-2 mt-5 rounded-md">
            Submit
          </button>
        </form>
            </div>

      </div>
    </section>
  );
};

export default Contact;
