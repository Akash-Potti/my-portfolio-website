import React from "react";
import f1data from "../assets/f1dataanalytics.png"
import tensor from "../assets/tensor.png"

const Projects = () => {
    const projects = [
        {
            img: f1data,
            title: "f1dataanalytics",
            desc: "decoding F1 performance data using python(Numpy,Pandas,Matplotlib)",
            live: "https://www.f1dataanalytics.com/"

        },
        {
            img: tensor,
            title: "Image Classification",
            desc: "Classifying differnt type of clothing from a dataset using Tensorflow Library",
            live: "https://github.com/Akash-Potti/Image-Classifcation-fashion-using-tensorflow"
        }
    ];
    return (
        <section className="bg-primary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold md-5 border-b-[5px] w-[180px] border-red-600 pb-2">
                        Projects
                    </h2>
                    <p className="pb-5">
                        These are some of my projects
                    </p>
                </div>
                <div className="about-img"></div>
            </div>
            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                {projects.map((project, i) => {
                    return (
                        <div className="relative" key={i}>
                            <img src={project.img} alt={project.title} />
                            <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto w-full h-full  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 hover:bg-opacity-50">
                                <p className="py-5 text-center font-bold px-2 text-white">
                                    {project.desc}
                                </p>

                                <div className="mx-auto">
                                    <a
                                        href={project.live}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                                    >
                                        Visit Project
                                    </a>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


export default Projects;