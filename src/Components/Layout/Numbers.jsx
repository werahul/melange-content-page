import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import ContactButton from "./ContactButton";
// import { campaigns, media, reach, clients } from "../../assets/images";

const CountingNumber = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = Math.ceil(value / (duration * 60));

      const timer = setInterval(() => {
        if (start >= value) {
          clearInterval(timer);
        } else {
          setCount(start);
          start += increment;
        }
      }, 1000 / 60);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const OurJourney = () => {
  return (
    <div className="font-nunito mt-16 lg:mt-[120px] max-container pt-10 lg:pt-[85px] pl-[30px] 2xl:w-[1200px] mx-auto  numbersBg h-auto lg:h-[224px]">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center">
        <div className="w-auto md:w-full grid grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-4 md:gap-x-0 mx-0 md:mx-20 ">
          <div className="text-center mb-10 md:mb-0">
            {/* <img src={clients} alt="" className="mb-3 w-20 h-16 mx-auto" /> */}
            <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl">
              <CountingNumber value={505} duration={2} />{" "}
              <span className="-ml-1 lg:-ml-4">+</span>
            </h2>
            <p className="text-md md:text-xl">Projects Delivered</p>
          </div>

          <div className="text-center mb-10 md:mb-0">
            {/* <img src={media} alt="" className="mb-0 w-14 h-[75px] mx-auto" /> */}
            <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl">
              <span>0</span>
              <CountingNumber value={9} duration={2} />{" "}
              <span className="-ml-1 lg:-ml-4">+</span>
            </h2>
            <p className=" text-md md:text-xl">Years of Experience</p>
          </div>
          <div className="text-center mb-10 md:mb-0">
            {/* <img src={reach} alt="" className="mb-3 w-20 h-16 mx-auto" /> */}
            <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl">
              <CountingNumber value={31} duration={2} />{" "}
              <span className="-ml-1 lg:-ml-4">+</span>
            </h2>
            <p className=" text-md md:text-xl">Brands</p>
          </div>
          <div className="text-center mb-10 md:mb-0">
            {/* <img src={reach} alt="" className="mb-3 w-20 h-16 mx-auto" /> */}
            <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl">
              <CountingNumber value={26} duration={2} />{" "}
              <span className="-ml-1 lg:-ml-4">+</span>
            </h2>
            <p className="text-md md:text-xl">Industries & Sectors</p>
          </div>
          <div className="text-center">
            {/* <img src={campaigns} alt="" className="mb-3 w-20 h-16 mx-auto" /> */}
            <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl">
              <CountingNumber value={2} duration={3} />{" "}
              <span className="-ml-1 lg:-ml-4">B+</span>
            </h2>
            <p className=" text-md md:text-xl">Views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
