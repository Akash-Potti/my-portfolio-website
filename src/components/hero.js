import React from "react";
import { TwitterLogo, LinkedinLogo, GithubLogo, DiscordLogo, Rss } from "@phosphor-icons/react"
import hero from "../assets/hero.png"


const Hero = () => {
    return (
        <section className="bg-primary px-5 text-white py-32 items-center ">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between 	">
                <div className="hero-info md:pb-0 	">
                    <h1 className="text-4xl lg:text:6xl">
                        Hi, I am Akash
                    </h1>
                    <p className="pt-2">
                        I am proficient in Python , Numpy , Pandas , Matplotlib , React....
                    </p>
                    <div className="flex gap-4 py-1 my-6">
                        <a
                            href="https://twitter.com/PottiAkash"
                            className="inline-block text-accent-text hover:text-[#89c8f0] transistion-all duration-150">

                            <TwitterLogo size={32} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akash-potti-434997249/"
                            className="inline-block text-accent-text hover:text-[#89c8f0] transistion-all duration-150">

                            <LinkedinLogo size={32} />
                        </a>
                        <a
                            href="https://github.com/Akash-Potti"
                            className="inline-block text-accent-text hover:text-[#89c8f0] transistion-all duration-150">

                            <GithubLogo size={32} />
                        </a>
                        <a
                            href="https://discord.gg/s6vcGC2G4s"
                            className="inline-block text-accent-text hover:text-[#89c8f0] transistion-all duration-150">

                            <DiscordLogo size={32} />
                        </a>
                        <a
                            href="https://www.f1dataanalytics.com/"
                            className="inline-block text-accent-text hover:text-[#89c8f0] transistion-all duration-150">

                            <Rss size={32} />
                        </a>

                    </div>
                    <a
                        href="/#projects"
                        className="btn bg-accent rounded-lg  border-2 border-[#7477FF] text-[#7477FF] px-6 py-2 !mt-7 hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>



            </div>
        </section>
    );
};

export default Hero;
