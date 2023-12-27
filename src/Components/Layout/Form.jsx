import React, { useEffect, useState, useRef } from 'react'
import { triBlue, triPurple, rock1, rock2 } from '../../assets/decorImg'
import emailjs from '@emailjs/browser'
import { ProgressBar } from 'react-loader-spinner'



import axios from 'axios'

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [need, setNeed] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(false)

    // useEffect(() => {
    //       setLoader(true)
    //       setTimeout(() => {
    //            setLoader(false)

    //       }, 4000)
    //  }, [])

    { /*   const blockedDomains = ['gmail.com', 'outlook.com', 'yahoo.com', "hotmail.com"]; // Add more domains as needed

    const validateEmail = () => {
        const domain = email.split('@')[1];
        if (blockedDomains.includes(domain)) {
            setError(
                alert("Please enter company's email address")
            );
            return false;
        }
        setError('');
        return true;
    };*/}


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // setError('');
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleNeedChange = (e) => {
        setNeed(e.target.value);
    };
    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };



    const formField = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateEmail()) {
            try {
                setLoader(true)
                // Proceed with your form submission or any other action
                // console.log('Email is valid:', email);

                const formData = {
                    name,
                    email,
                    phone,
                    need,
                    budget,
                    message


                };
                const { data } = await axios.post(
                    // "https://whatsapp-backend-226o.onrender.com/api/image-url",
                    // "https://orchid-hippo-robe.cyclic.cloud/api/image-url",
                    {
                        name: formData.name,
                        phone: formData.phone,
                    }
                );
                window.location.href = "/thankyou";
                // console.log({ data });

                // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
                emailjs
                    .send(
                        // "service_melangedigital",
                        // "template_d80pgaj",
                        {
                            from_name: formData.name,
                            to_name: "Sanket Bolinjkar",
                            from_email: formData.email,
                            from_phone: formData.phone,
                            from_need: formData.need,
                            from_budget: formData.budget,
                            from_message: formData.message,

                            to_email: "hello@melangedigital.in",
                        },
                        // "11W3shu7B6S46t437"
                    )
                    .then(
                        () => {


                            if (formField.current) {
                                formField.current.reset();
                            }
                        },
                        (error) => {
                            setLoading(false);
                            console.log(error);
                            alert("Something went wrong!");
                        }
                    );

                // Reset form fields
                setName("");
                setEmail("");
                setPhone("");
                setNeed("");
                setBudget("");
                setMessage("");
                setLoader(false)
            } catch (error) {
                console.log(error)
            }
        }


    };
    return (
        <div className='formSec  pt-[60px] lg:mt-[110px] mt-20 pb-[48px] lg:px-20 px-5 font-nunito relative' id='contactus'>
            <div className="lg:text-center text-zinc-900 lg:text-[40px] text-2xl font-semibold lg:leading-[48px] leading-[34px]">Want impactful content? Share your details here</div>
            <div className="lg:px-[15%] lg:text-center text-black lg:text-xl text-base font-normal lg:leading-[30px] mt-2">Our production team will connect with you to understand your unique needs, budget, and desired outcomes, ensuring the delivery of content that drives results.
            </div>
            <form onSubmit={handleSubmit} ref={formField}>
                <div className=" max-container grid lg:grid-cols-2 grid-cols-1 lg:gap-6 lg:gap-y-6 gap-y-3 lg:mt-9 mt-6 lg:px-[8%]">

                    <input value={name} onChange={handleNameChange} required type="text" placeholder='Full Name*' className='w-full outline-none font-nunito lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3 text-[#6A6A68] placeholder-[#6A6A68]' />

                    <input value={email} onChange={handleEmailChange} required type="email" placeholder='Email id*' className='w-full outline-none font-nunito  lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3 text-[#6A6A68] placeholder-[#6A6A68]' />

                    <input value={phone} onChange={handlePhoneChange} required type="tel" placeholder='Phone no*' className='w-full outline-none font-nunito  lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3 text-[#6A6A68] placeholder-[#6A6A68]' />


                    <select value={need} onChange={handleNeedChange} required className='w-full outline-none font-nunito lg:h-12 h-[39px] lg:rounded-none rounded bg-white px-3 text-[#6A6A68]'>
                        <option value="" disabled>What do you need*</option>
                        <option value="option1">Option A</option>
                        <option value="option2">Option B</option>
                    </select>

                    <select value={budget} onChange={handleBudgetChange} required className='w-full outline-none font-nunito lg:h-12 h-[39px] lg:rounded-none rounded bg-white px-3 text-[#6A6A68]'>
                        <option value="" disabled>What is your budget*</option>
                        <option value="company1">Budget A</option>
                        <option value="company2">Budget B</option>
                    </select>

                    <input
                        value={message}
                        onChange={handleMessageChange}
                        required
                        placeholder='Your message*'
                        className='w-full outline-none font-nunito lg:h-12 h-[39px] lg:rounded-none rounded bg-white p-3 text-[#6A6A68] placeholder-[#6A6A68] resize-none'
                    />


                </div>

                <div className="flex justify-center items-center lg:mt-8 mt-[19px]">
                    {loader ? (<ProgressBar
                        height="80"
                        width="80"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass="progress-bar-wrapper"
                        borderColor='#800080'
                        barColor='#51E5FF'
                        loader={loader}
                    />) : (<button type='submit' className="lg:w-28 w-full h-11 px-[23px] py-0.5 bg-gradient-to-l submitBtn rounded-[100px] justify-center items-center gap-3 inline-flex font-nunito text-white text-xl font-semibold  leading-[35px]">Submit</button>)}
                </div>
                {error && <p className="error">{error}</p>}

            </form>
            <div className=" lg:block hidden absolute top-[10%] left-[8%] animate-pulse"><img src={triBlue} alt="" /></div>
            <div className=" lg:block hidden absolute bottom-[10%] right-[10%] animate-pulse"><img src={triPurple} alt="" /></div>

        </div>
    )
}

export default Form

