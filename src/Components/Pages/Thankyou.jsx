import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { check2 } from "../../assets/images";

const Thankyou = () => {

    

  return (

    <div className="font-nunito flex flex-col text-center mt-10 justify-center items-center" >
      
      <img src={check2} alt="" className="w-40" />
      <h1 className="font-bold font-nunito lg:text-6xl text-4xl mt-8">Thank You !</h1>
      <p className="font-bold font-nunito lg:text-[23px] text-sm lg:mt-2">
        for submitting your query.
      </p>
      <Link
        to="/"
        className=" bg-blue-500  lg:text-[18px] font-nunito text-[15px] lg:mt-6 mt-4 multiverse-text w-auto p-3 rounded-xl font-bold text-white hover:text-black"
      >
        Back to Home page
      </Link>
    </div>
  );
};

export default Thankyou;
