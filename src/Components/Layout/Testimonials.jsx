// Testimonials.js

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const testimonialsData = [
  {
    id: 1,
    para: "I've collaborated with Mélange Digital on various projects & the experience has consistently been seamless. Their expertise spans photography, video creation & more. The convenience of working with a consistent team from inception to completion has been truly valuable.",
    name: "Jay Thadeshwar",
    designation: "CEO, Poised Media",
  },
  {
    id: 2,
    para: "Teaming up with Mélange Digital was undeniably a win. Their expertise and top-notch equipment delivered an engaging reel that perfectly aligned with my audience's taste, effectively showcasing brand promotion. I highly recommend them for social media videos.",
    name: "Forum Shah",
    designation: " Fashion & Lifestyle Influencer",
  },
  {
    id: 3,
    para: "Mélange Digital has created marketing videos, product videos, company videos, and training videos for us while taking the time to become knowledgeable about our company and our products. They can handle even the tightest of deadlines, & it is always a pleasure to work with them.",
    name: "Vivek Attri",
    designation: "CMO, Aartech Solonis Ltd.",
  },
  {
    id: 4,
    para: "Kalon's product photography by Mélange Digital exceeded all expectations. Their attention to detail in lighting & composition resulted in visuals that breathed life into our products. Every aspect was expertly captured, showcasing the true essence & quality of our offerings. ",
    name: "Vidya Pandit",
    designation: "Managing Director, Kalon Agro",
  },
  {
    id: 5,
    para: "For Arq Mithai's explainer video, they brilliantly showcased our diverse range of mithai flavors, bringing each one to life with vivid visuals & engaging storytelling. The video not only captivated our audience but also effectively communicated the essence of our offerings.",
    name: "Ashay Dhopatkar",
    designation: "Founder, Arq Providores",
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonial = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const previousTestimonial = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleSwipe = (delta) => {
    if (delta < 0) {
      nextTestimonial();
    } else {
      previousTestimonial();
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [startIndex]);

  const visibleTestimonials = [
    testimonialsData[
      (startIndex - 1 + testimonialsData.length) % testimonialsData.length
    ],
    testimonialsData[startIndex],
    testimonialsData[(startIndex + 1) % testimonialsData.length],
  ];

  const handleDotClick = (index) => {
    setStartIndex(index);
  };

  return (
    <>
      <div className="text-center font-nunito mb-10 lg:pt-20 pt-16">
        <span className="multiverse-text text-3xl lg:text-5xl font-bold font-nunito leading-[56px]">
          Testimonials
        </span>
      </div>
      <div
        {...handlers}
        className="flex font-nunito mb-5 max-container lg:space-x-10 text-center  px-5  lg:px-[100px] overflow-hidden"
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-full p-5 lg:p-8 rounded-[30px] drop-shadow-xl border relative  testimonial`}
          >
            <p className="pb-10 text-[16px]">{testimonial.para}</p>
            <p className="font-bold text-[20px] multiverse-text bottom-12">
              {testimonial.name}
            </p>
            <p className="text-[18px] bottom-5 text-center">
              {testimonial.designation}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center mb-20 justify-center space-x-2">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`rounded-full cursor-pointer ${
              index === startIndex
                ? "bg-[#d940ff] w-40 h-3 animateDot"
                : "border border-blue-500 w-3 h-3"
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </>
  );
};
export default Testimonials;
