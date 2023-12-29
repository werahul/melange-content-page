import React from 'react'
import { cs1 } from '../../assets/images'
import { sqaureDots } from '../../assets/decorImg'

const ContentSolution = () => {
    return (
        <div className="max-container  lg:px-[96px] px-[20px] 2xl:mx-auto xxl:px-[156px] my-[70px] lg:my-[100px]">

            <div className=" relative">
                <div className="lg:flex justify-center items-start lg:space-x-[60px]">
                    <img src={cs1} alt="" className='w-full' />
                    <div className="lg:-mt-0 mt-3">
                        <div className="">
                            <span className="text-zinc-900 lg:text-5xl text-3xl font-semibold font-nunito lg:leading-[56px]">Where Impact Meets </span><span className="multiverse-text lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">Visual Innovation</span></div>
                        <div className=" text-black lg:text-lg  text-base font-normal font-nunito lg:mt-3 mt-3">At Mélange Digital, we redefine video production by seamlessly blending creativity with strategy. Our approach goes beyond the surface, delving deep into the core of your brand's identity. We specialize in crafting videos that not only captivate but strategically communicate your brand's narrative, providing solutions to your business challenges. Our mission is to go beyond the ordinary, ensuring that every frame serves a dual purpose – an aesthetic delight and a solution-driven connection with your audience.<br /></div>
                        <div className="text-black lg:text-lg text-base font-normal font-nunito lg:mt-2 mt-3">Let's collaborate to bring your brand's visual story to life through the perfect blend of motion, audio, aesthetics, and, most importantly, strategy.</div>

                        <div className="rounded-gradient-border p-0.5  rounded-[30px] lg:mt-5 mt-5 transition-all">
                            <a href="#contactus">
                                <div className="bg-white transition-all rounded-[30px] mid hover:text-white ">
                                    <button className="multiverse-text2 font-semibold rounded-[30px] transition-all  text-[20px] py-1 px-7 ">
                                        Contact
                                    </button>
                                </div>
                            </a>

                        </div>


                    </div>
                </div>
                <img src={sqaureDots} alt="" className='absolute -bottom-[60px] -z-10 -left-10 lg:block hidden ' />

            </div>
        </div >
    )
}

export default ContentSolution