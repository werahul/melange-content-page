import React from "react";
import { c1, c2, c3, c4, c5, c6 } from "../../assets/images";

const CreativeCrew = () => {
  return (
    <div className="max-container font-nunito lg:mt-[100px] mt-[70px] px-5 lg:px-[100px]">
      <div className="text-center">
        <span className="text-black text-3xl lg:text-5xl font-bold font-nunito leading-[28px] lg:leading-[56px]">
          Your{" "}
        </span>
        <span className="multiverse-text text-3xl lg:text-5xl font-bold font-nunito leading-[28px] lg:leading-[56px]">
          Creative Crew
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] lg:gap-[32px] mt-[30px] lg:mt-[56px]">
        <div>
          <img
            src={c1}
            alt=""
            className="h-auto lg:h-[435px] w-full lg:w-[369px] lg:mb-[20px] mb-3"
          />
          <h4 className="multiverse-text  font-bold text-[18px] lg:text-[24px]">
            {" "}
            Strategist:{" "}
          </h4>
          <p className="text-[18px] lg:text-[24px]">
            Shapes the overarching vision, ensuring the video aligns with the
            brand's goals and resonates with the target audience.
          </p>
        </div>
        <div className="lg:mt-[73px]">
          <img
            src={c2}
            alt=""
            className="h-auto lg:h-[435px] w-full lg:w-[369px] lg:mb-[20px] mb-3"
          />
          <h4 className="multiverse-text font-bold text-[18px] lg:text-[24px]">
            {" "}
            Scriptwriter:{" "}
          </h4>
          <p className="text-[18px] lg:text-[24px]">
            Crafts captivating narratives that serve as the backbone for our
            visual stories, connecting seamlessly with your target audience.
          </p>
        </div>
        <div>
          <img
            src={c3}
            alt=""
            className="h-auto lg:h-[435px] w-full lg:w-[369px] lg:mb-[20px] mb-3"
          />
          <h4 className="multiverse-text font-bold text-[18px] lg:text-[24px]">
            {" "}
            Cinematographer:{" "}
          </h4>
          <p className="text-[18px] lg:text-[24px]">
            Captures the essence of the story through expert use of cameras,
            lighting, and composition, bringing visual narratives to life.
          </p>
        </div>
        <div>
          <img
            src={c4}
            alt=""
            className="h-auto lg:h-[435px] w-full lg:w-[369px] lg:mb-[20px] mb-3"
          />
          <h4 className="multiverse-text font-bold text-[18px] lg:text-[24px]">
            {" "}
            Editor:{" "}
          </h4>
          <p className="text-[18px] lg:text-[24px]">
            Transforms raw footage into a polished masterpiece, seamlessly
            merging scenes, audio, and visual elements to craft a cohesive and
            engaging narrative.
          </p>
        </div>
        <div className="lg:mt-[73px]">
          <img
            src={c5}
            alt=""
            className="h-auto lg:h-[435px] w-full lg:w-[369px] lg:mb-[20px] mb-3"
          />
          <h4 className="multiverse-text font-bold text-[18px] lg:text-[24px]">
            {" "}
            Photographer:{" "}
          </h4>
          <p className="text-[18px] lg:text-[24px]">
            Skillfully captures still moments, creating compelling images that
            complement and enhance the overall visual storytelling.
          </p>
        </div>
        <div>
          <img
            src={c6}
            alt=""
            className="h-auto lg:h-[435px] w-full lg:w-[369px] lg:mb-[20px] mb-3"
          />
          <h4 className="multiverse-text font-bold text-[18px] lg:text-[24px]">
            {" "}
            Analyst:{" "}
          </h4>
          <p className="text-[18px] lg:text-[24px]">
            Utilizes data and metrics to assess the performance of the video,
            offering valuable insights to optimize strategies and enhance future
            content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeCrew;
