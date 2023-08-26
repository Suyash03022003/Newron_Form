"use client";

import React, { useState, useRef } from "react"
import { sendContactForm } from "services"
import Image from 'next/image'
import logo from '../images/logo.png'
import aside from '../images/aside.avif'

const Contact = () => {
    const [message, setMessage] = useState("");
    const formRef = useRef();
    const submitContact = async (e) => {
        e.preventDefault();
        console.log(e);
        const res = await sendContactForm({
            email: e.target[0].value,
            name: e.target[1].value,
            phone: e.target[2].value,
            line1: e.target[3].value,
            line2: e.target[4].value,
            pin: e.target[5].value,
            state: e.target[6].value,
            city: e.target[7].value,
        });
        if (res == 0) {
            formRef.current.reset();
            submitted(formRef);
        } else {
            formRef.current.innerHTML = "Something went wrong! Please try again";
        }
    };

    const submitted = (formRef) => {
        formRef.current.innerHTML = "Thank you! Your Info has been updated.";
    }

    return (

        <div className="container">
            <div className="container flex items-center gap-7 m-5">
                <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt="Picture of the author"
                />
                <h2>Newron AI</h2>
            </div>
            <div className="container mt-14 flex gap-16 items-center justify-center mb-20">
                <form
                    ref={formRef}
                    onSubmit={submitContact}
                    className="flex flex-col w-1/3 gap-4"
                >
                    <input
                        required
                        placeholder="Email Address*"
                        type={"email"}
                        className="border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <input
                        required
                        placeholder="Name*"
                        type={"text"}
                        className="border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <input
                        required
                        placeholder="Phone Number*"
                        type={"number"}
                        className="border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <h3 className="mt-5">Address</h3>
                    <input
                        required
                        placeholder="Line 1*"
                        type={"text"}
                        className="border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <input
                        required
                        placeholder="Line 2*"
                        type={"text"}
                        className="border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <input
                        required
                        placeholder="PINCODE / ZIP*"
                        type={"number"}
                        className="border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <div className="flex gap-5">
                    <input
                        required
                        placeholder="State*"
                        type={"text"}
                        className="w-1/2 border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    <input
                        required
                        placeholder="City*"
                        type={"text"}
                        className="w-1/2 border-[1px] border-black rounded-lg px-5 py-3"
                    />
                    </div>
                    <button 
                        type="submit"
                        className="mt-4 border-[1px] border-black rounded-lg px-5 py-3"
                    >
                        Send
                    </button>
                </form>
                <div className="w-1/3">
                    <Image
                        src={aside}
                        className="w-full h-auto"
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
