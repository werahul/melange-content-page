import React from "react";
// import { useSpring, animated } from "react-spring";

const IndustriesAutoScroll = ({ images, title }) => {
  return (
    <div className="lg:pt-[80px] flex flex-col justify-center items-center ">
    <div><span className="text-black lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">Industries </span><span className="multiverse-text lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">We Served</span></div>
      <div className="marquee lg:mt-8 ">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGeInd" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGeInd" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesAutoScroll;
