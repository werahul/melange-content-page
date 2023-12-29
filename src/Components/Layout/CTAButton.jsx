// CTAButton.js
import React, { useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';

const CTAButton = () => {
  const phoneNumber = '7700974123';

  const handleButtonClick = () => {
    // Construct the WhatsApp URL with the phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open the URL in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-10   z-30 right-3 lg:right-28 flex space-x-2">
      <a href="#contactus">
        <button
          className="submitBtn text-[#fff] shadow-2xl  font-nunito px-5 py-4 rounded-[50px] 
        "
        >
          <span className=" font-bold text-[16px]  md:text-[18px]">
            Get a Free Quote
          </span>
        </button>
      </a>

      <button onClick={handleButtonClick} className="whatsapp-button w-14 h-14 flex items-center justify-center p-2 bg-[#25d366] text-white rounded-[50px] cursor-pointer text-[28px]">
        <FaWhatsapp className="whatsapp-icon " />
      </button>


    </div>
  );
};

export default CTAButton;
