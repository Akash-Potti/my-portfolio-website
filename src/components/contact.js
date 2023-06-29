import React from "react";
import { EnvelopeSimple } from "@phosphor-icons/react"
const Contact = () => {
    return (
        <section className="bg-secondery px-5 py-32" id="contact">
            <div className="text-center md:w-[60%] mx-auto text-white">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit mx-auto border-red-600 pb-2">
                    CONTACT
                </h2>
                <p>
                    I am currently open for freelancing for Data Analyst and Web Devlopment role, If you want to dicuss about that feel free to contact me.
                </p>
                <div className="">
                    <p className="py-5">
                        <span className="font-bold">Email: <a href="mailto:akashpotti07@gmail.com">akashpotti07@gmail.com</a></span>
                    </p>
                </div>



            </div>
        </section>
    );
};

export default Contact;