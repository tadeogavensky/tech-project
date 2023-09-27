import React from "react";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <h1 className="text-5xl font-bold font-palanquin max-w-sm leading-normal">
          Sign Up for <span className="text-pink-500">Updates</span> &
          Newsletter
        </h1>

        <div className="w-full lg:max-w-[40%] lg:border-[2px] gap-4  lg:border-slate-300 rounded-full px-2 flex flex-col lg:flex-row justify-between ">
          <input
            type="text"
            placeholder="subscribe@apple.com"
            className="px-8 py-6 rounded-full border-[2px] border-slate-300 lg:border-[0px] lg:border-none"
          />
          <div className="flex justify-end">
            <button className="bg-pink-500 font-montserrat text-white rounded-full text-xl px-6 py-2  lg:my-2">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
