import React from "react";
// import { useSpring, animated } from "react-spring";

const PowerCreativity = ({ images, title }) => {
  return (
    <div className="lg:pt-[120px] pt-[70px] flex flex-col justify-center items-center ">
    <div className=" lg:px-0 px-5 lg:pb-0 pb-3 text-center"><span className="text-black lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[56px]">Powering Creativity with</span><span className="text-black lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[56px]"> </span><span className="multiverse-text lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[56px]">Cutting-Edge Technology</span></div>
      <div className="marquee lg:mt-8">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe100" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerCreativity;
