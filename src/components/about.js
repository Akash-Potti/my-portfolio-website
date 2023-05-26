import React from "react";
import Akash from "../assets/Akash.jpg"

const About = () => {
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container grid grid-rows-2 md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-fit border-red-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5 break-words">
                        Hi,myself Akash,
                        <br />
                        <br />
                        I’m  an undergarduate student pursuing Computer Science Engineering.
                        <br />
                        <br />
                        I’m intrested in Data Analytics,Web development,AI...
                        <br />
                        <br />
                        I run a Formula 1 data analysis blog,where I decode Formula-1 car performance data and blog them on my website <a href="https://www.f1dataanalytics.com/">f1dataanalytics</a>
                        <br />
                        <br />
                        I am proficient in Python,Numpy,Pandas,Matplotlib,TensorFlow,React and Node Js
                    </p>
                </div>
                <div className="about-img">
                    <img
                        src={Akash}
                        alt="photo"
                        className="md:ml-auto w-80 h-80 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                    />
                </div>
            </div>
        </section >
    );
};

export default function AboutNew() {
    return (
        <section className="bg-secondery text-white px-2 md:px-5 py-16 w-full h-full grid place-items-center" id="about">
            <div className="container w-full h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl font-bold mb-5  border-b-[5px] w-fit border-red-600 pb-2">
                        About Me
                    </h2>
                    <div className="mt-2">
                        <p>
                            Hi, I am Akash
                        </p>
                        <p className="mt-2">
                            I'm an undergarduate student pursuing Computer Science Engineering.
                        </p>
                        <p className="mt-2">
                            I am interested in data analytics, web development, AI.
                        </p>
                        <p>
                            I run a Formula 1 data analysis blog,where I decode Formula-1 car performance data and blog them on my website <a href="https://www.f1dataanalytics.com/">f1dataanalytics</a>
                        </p>
                        <p>
                            I am proficient in Python, Numpy, Pandas, Matplotlib, Tensorflow, React and NodeJS
                        </p>
                    </div>
                </div>
                <div className="about-img w-full h-full grid place-items-center">
                    <img
                        src={Akash}
                        alt="photo"
                        className="md:ml-auto md:w-80 md:h-80 w-32 h-32 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
                    />
                </div>
            </div>
        </section>
    )
};