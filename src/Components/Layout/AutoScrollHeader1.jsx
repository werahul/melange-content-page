import React from "react";
// import { useSpring, animated } from "react-spring";

const AutoScrollHeader1 = ({ images, title }) => {
  return (
    <div className="pt-[80px] " id="clients">
    <div className="text-center"><span className="text-black lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">Our </span><span className="multiverse-text lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">Clientele</span></div>
      <div className="marquee lg:mt-8">
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
        <div className="marqueeGroup">
          {images.map((el, index) => (
            <div key={index} className="imageGroup1">
              <img src={el} className="imaGe" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoScrollHeader1;
