// TagSwitcher.js
import React, { useState } from "react";
import {
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  Audio1,
  Audio2,
  Audio3,
  Audio4,
  Audio5,
  Audio6,
  Audio7,
} from "../../assets/images";

const itemsData = {
  Videography: [
    { id: 1, image: video1, title: "Product Videos" },
    { id: 2, image: video2, title: "Brand Videos" },
    { id: 3, image: video3, title: "Digital Ads" },
    { id: 4, image: video4, title: "Animation & Motion Graphics" },
    { id: 5, image: video5, title: "Social Media Videos" },
    { id: 6, image: video6, title: "Influencer Marketing Videos" },
    { id: 7, image: video7, title: "Explainer Videos" },
    { id: 8, image: video8, title: "Corporate Films" },
    { id: 9, image: video9, title: "Live or Virtual Events Filming" },
    // Add more videography items as needed
  ],
  Photography: [
    { id: 10, image: photo1, title: "Industrial Photography" },
    { id: 11, image: photo2, title: "Leadership Portraits" },
    { id: 12, image: photo3, title: "Product Photography" },
    { id: 13, image: photo4, title: "Food Photography" },
    { id: 14, image: photo5, title: "E-Commerce Photography" },
    { id: 15, image: photo6, title: "Fashion Photography" },
  ],

  Audio: [
    { id: 16, image: Audio1, title: "Music Production" },
    { id: 17, image: Audio2, title: "Composition" },
    { id: 18, image: Audio3, title: "Song Writing" },
    { id: 19, image: Audio4, title: "Jingle Production" },
    { id: 20, image: Audio5, title: "Voice Over" },
    { id: 21, image: Audio7, title: "Background Score" },
  ],
};

const TagSwitcher = () => {
  const [activeTag, setActiveTag] = useState("Videography");

  const switchTag = (tag) => {
    setActiveTag(tag);
  };

  const getContent = () => {
    const items = itemsData[activeTag];

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 px-[20px] lg:px-[100px] gap-y-10 lg:gap-4" id="services">
        {items.map((item) => (
          <div key={item.id} className=" lg:p-4 transition-scale ">
            <img src={item.image} alt="" className="w-full"/>
            <h3 className="text-center  font-bold multiverse-text text-[21px] lg:text-[24px] font-nunito mt-2">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="max-container mx-auto lg:mt-32 mt-0">
      <div className="text-center font-nunito">
        <span className="text-black text-3xl lg:text-5xl font-bold font-['Nunito Sans'] leading-[56px]">
          Our{" "}
        </span>
        <span className="multiverse-text text-3xl lg:text-5xl font-bold font-['Nunito Sans'] leading-[56px]">
          Services
        </span>
      </div>
      <div className="flex justify-center my-4 lg:my-[32px] font-nunito lg:space-x-4 space-x-2">
        <TagButton
          tag="Videography"
          activeTag={activeTag}
          switchTag={switchTag}
        />
        <TagButton
          tag="Photography"
          activeTag={activeTag}
          switchTag={switchTag}
        />
        <TagButton tag="Audio" activeTag={activeTag} switchTag={switchTag} />
      </div>
      <div className="mt-4">{getContent()}</div>
    </div>
  );
};

const TagButton = ({ tag, activeTag, switchTag }) => {
  return (
    <button
      className={`${
        activeTag === tag
          ? "border-blue-600 multiverse-text"
          : "border-neutral-400 text-[#979797]"
      } lg:px-4 px-2 py-2 rounded-full outline-none transition-all border text-base lg:text-lg font-semibold `}
      onClick={() => switchTag(tag)}
    >
      {tag}
    </button>
  );
};

export default TagSwitcher;
