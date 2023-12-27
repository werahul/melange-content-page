// CTAButton.js
import React, { useState } from "react";

const CTAButton = () => {

  return (
    <div className="fixed bottom-10   z-30 right-3 lg:right-28">
      <button
        className="submitBtn text-[#fff] shadow-2xl  font-nunito px-5 py-4 rounded-[50px] 
        "
      >
        <span className=" font-bold text-[16px]  md:text-[18px]">
          Get a Free Quote
        </span>
      </button>
     
    </div>
  );
};

export default CTAButton;
