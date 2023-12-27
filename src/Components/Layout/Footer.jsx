import React, { useState, useRef } from "react";
import {
    melange_logo2,
    linkedin,
    instagram
} from "../../assets/images";
// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" bg-[#1A1A1A] pt-10 font-nunito px-2 lg:px-[100px] mt-[70px]">
            <div className=" flex justify-evenly  flex-col lg:flex-row text-white items-start ml-4 md:ml-0">
                <div className="flex flex-col justify-between">
                    <div>
                        <img
                            src={melange_logo2}
                            alt=""
                            className="mb-6 md:mb-0 w-auto h-auto"
                        />
                        <div className="lg:w-[700px] text-white text-base lg:font-semibold font-nunito leading-normal lg:mt-5 mt-2 ">We're a team of skilled and experienced filmmakers, producers, strategists, digital marketing analysts, and influencer project managers who specialize in crafting high-quality content & visuals that tell your brand’s story and give measurable results. We bring your brand’s vision to life by offering end-to-end services, from concept development to post-production. Let’s tell your story together.</div>
                    </div>
                </div>
                <div className="translate-x-0 lg:translate-x-[20%]">
                    <div className="flex flex-col lg:mt-0 mt-3">
                        <h2 className="font-bold text-lg md:text-xl mb-2 md:mb-0 ">
                            Quick Links
                        </h2>
                        <div className="lg:mt-5">
                            <ul className="">
                                <a href="#services"><li className="hover:underline">Services</li></a>
                                <a href="#clients"><li className="lg:my-3 my-1 hover:underline">Clients</li></a>
                                <a href="#portfolio"><li className="hover:underline">Portfolio</li></a>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="translate-x-0 space-y-4 lg:translate-x-[20%] flex flex-col mt-5 md:mt-0">
                    <div className="lg:mb-6 ">
                        <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
                            Call Us
                        </h2>
                        <a
                            href="tel:+917700974123"
                            className="text-sm md:text-[15px] mb-2 md:mb-0 md:mt-2"
                        >
                            +91 7700974123
                        </a>
                    </div>
                    <div className="mb-2 md:mb-0 ml-0 md:ml-0">
                        <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
                            Email Us
                        </h2>
                        <a
                            href="mailto:hello@melangedigital.in"
                            className="text-sm mt-2 underline md:text-[15px]"
                        >
                            hello@melangedigital.in
                        </a>
                    </div>
                    <div className="mb-2 md:mb-0 ml-0 md:ml-0 lg:mt-10">
                        <h2 className="font-bold text-lg md:text-xl mb-0 md:mb-0">
                            Connect with us
                        </h2>
                        <div className="flex space-x-2 lg:mt-3">

                            <a href="https://www.linkedin.com/company/melangedigital/" target="_blank" ><img src={linkedin} alt="" className="w-9" /></a>
                            <a href="https://www.instagram.com/melangedigital.in/" target="_blank"> <img src={instagram} alt="" /></a>
                        </div>

                    </div>
                </div>

            </div>

            {/* Down links  */}
            <div className="mx-4 mt-3 md:mx-12 h-0.5 bg-[#564f4f]"></div>
            <div className="mx-4 md:mx-14 text-white py-5 font-nunito text-right bg-[#1A1A1A]">
                <p className="text-sm md:text-base">
                    &copy; {new Date().getFullYear()} Mélange Digital. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
