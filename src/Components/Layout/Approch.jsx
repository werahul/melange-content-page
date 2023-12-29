import React from 'react'
import { app1, app2, app3, app4, app5, app6, line } from '../../assets/images'
import { wave, wavePurple } from '../../assets/decorImg'

const Approch = () => {
    return (
        <div className=' lg:-mt-[50px] -mt-[70px] relative lg:px-0 px-5' id='ourapproach'>
            <div className="flex justify-center items-center">
                <div><span className="text-black lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">Our </span><span className="multiverse-text lg:text-5xl text-3xl font-bold font-nunito lg:leading-[56px]">Approach</span></div>
            </div>
            <div className="max-container lg:px-[150px] lg:mt-[75px] mt-[40px] ">
                <div className="lg:flex justify-center items-center ">
                    <div className="lg:w-[30%] lg:mb-0 mb-3">
                        <img src={app1} alt="" className='w-24 lg:w-auto' />
                    </div>
                    <div className="lg:w-[70%] lg:text-center text-left ">
                        <div className="text-blue-600 lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[48px]">Stage 1: Brief Call</div>
                        <div className="lg:text-center text-left text-zinc-900 lg:text-2xl text-base font-normal font-nunito lg:leading-[34px] lg:mt-5 mt-2">
                            We really get to know your brand inside out, understanding your USPs, business challenges & goals. It's not just a call; it's the first step toward a collaborative journey where your vision becomes our mission.
                        </div>
                    </div>
                </div>
                <img src={line} alt="" className='lg:my-10 my-5' />
                <div className="flex flex-col-reverse lg:flex-row  justify-center lg:items-center lg:space-x-[100px] ">

                    <div className="lg:w-[75%] lg:text-center text-left ">
                        <div className="text-blue-600 lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[48px]">Stage 2: Research & Strategy</div>
                        <div className="lg:text-center text-left text-zinc-900 lg:text-2xl text-base font-normal font-nunito lg:leading-[34px] lg:mt- mt-2">We dive into the depths of your industry, market dynamics, and audience insights. This is the foundation for crafting a roadmap and blueprint that guides every nuance of our video and photography production.</div>
                    </div>
                    <div className="lg:w-[25%] lg:mb-0 mb-3">
                        <img src={app2} alt="" className='w-24 lg:w-auto' />
                    </div>
                </div>
                <img src={line} alt="" className='lg:my-10 my-5' />
                <div className="lg:flex  justify-center items-center ">
                    <div className="lg:w-[30%] lg:mb-0 mb-3">
                        <img src={app3} alt="" className='lg:w-auto w-24' />
                    </div>
                    <div className="lg:w-[70%] lg:text-center text-left ">
                        <div className="text-blue-600 lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[48px] ">Stage 3: Pre-Production</div>
                        <div className="lg:text-center text-left text-zinc-900 lg:text-2xl text-base font-normal font-nunito lg:leading-[34px] lg:mt-5 mt-2">Based on our data-backed insights from research, we seamlessly transition into the Pre-Production phase. Here, the team meticulously crafts scripts and evokes visual atmospheres through moodboards.</div>
                    </div>
                </div>
                <img src={line} alt="" className='lg:my-10 my-5' />
                <div className="flex lg:flex-row flex-col-reverse  justify-center lg:items-center lg:space-x-[100px] ">

                    <div className="lg:w-[82%] lg:text-center ">
                        <div className="text-blue-600 lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[48px]">Stage 4: Production</div>
                        <div className="lg:text-center text-zinc-900 lg:text-2xl text-base font-normal font-nunito lg:leading-[34px] lg:mt-5 mt-2">
                            Our production team takes on your project equipped with top-quality gear, breathing life into your brand story. We ensure it is portrayed with the utmost excellence and attention to details to fulfill your business objectives.
                        </div>
                    </div>
                    <div className="lg:w-[23%] lg:mb-0 mb-2">
                        <img src={app4} alt="" className='lg:w-auto w-24' />
                    </div>
                </div>
                <img src={line} alt="" className='lg:my-10 my-5' />
                <div className="lg:flex  justify-center items-center ">
                    <div className="lg:w-[30%] lg:mb-0 mb-2">
                        <img src={app5} alt="" className='lg:w-auto w-24' />
                    </div>
                    <div className="lg:w-[70%] lg:text-center ">
                        <div className="text-blue-600 lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[48px]">Stage 5: Post-Production</div>
                        <div className="lg:text-center text-zinc-900 lg:text-2xl font-normal font-nunito lf:leading-[34px] lg:mt-5 mt-2">
                            We enhance the raw content with advanced editing software, refine audio elements, and incorporate seamless transitions. This ensures the delivery of a project that not only meets but exceeds your expectations.
                        </div>
                    </div>
                </div>
                <img src={line} alt="" className='lg:my-10 my-5' />
                <div className="flex lg:flex-row flex-col-reverse justify-center lg:items-center lg:space-x-[100px] ">

                    <div className="lg:w-[77%] lg:text-center ">
                        <div className="text-blue-600 lg:text-[32px] text-[20px] font-bold font-nunito lg:leading-[48px]">Stage 6: Distribution & Analytics</div>
                        <div className="lg:text-center text-zinc-900 lg:text-2xl text-base font-normal font-nunito lg:leading-[34px] lg:mt-5 mt-2">We ensure your content reaches the right audience through strategic media placement. Additionally, we assist you in analyzing the impact of your online campaigns through comprehensive data and reports.</div>
                    </div>
                    <div className="lg:w-[23%] lg:mb-0 mb-3">
                        <img src={app6} alt="" className='lg:w-auto w-24' />
                    </div>
                </div>


            </div>
            <img src={wave} alt="" className='absolute top-[200px] left-0 lg:block hidden' />
            <img src={wavePurple} alt="" className='absolute top-[700px] right-0 lg:block hidden' />
            <img src={wave} alt="" className='absolute top-[1200px] left-0 lg:block hidden' />
            <img src={wavePurple} alt="" className='absolute top-[1500px] right-0 lg:block hidden' />
            <img src={wave} alt="" className='absolute bottom-0 left-0 lg:block hidden' />
        </div>
    )
}

export default Approch