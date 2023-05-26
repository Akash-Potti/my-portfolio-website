import React from "react";
import Akash from "../assets/Akash.jpg"

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold md-5 border-b-[5px] w-[180px] border-red-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">
                        Hi,myself Akash,
                    </p>
                    <p className="pb-5">
                        I’m  an undergarduate student pursuing Computer Science Engineering.
                    </p>
                    <p>
                        I’m intrested in Data Analytics,Web development,AI...
                    </p>


                    <p className="pb-5" >
                        I run a Formula 1 data analysis blog,where I decode Formula-1 car performance data and blog them on my website <a href="https://www.f1dataanalytics.com/">f1dataanalytics
                        </a>
                    </p>

                    <p>
                        I am proficient in Python,Numpy,Pandas,Matplotlib,TensorFlow,React and Node Js
                    </p>
                </div>
                <div className="about-img">
                    <img
                        src={Akash}
                        alt="photo"
                        className="lgw-[80%] md:ml-auto w-80 h-80 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                    />
                </div>
            </div>
        </section >
    );
};

export default About;