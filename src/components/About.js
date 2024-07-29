import React from "react";
import aboutData from "@/data/aboutData";

function About() {
  return (
    <div
      className="wrapper-about pt-24  lg:pt-32 pb-3 lg:pb-10  w-full bg-cover"
      style={{ backgroundImage: 'url("bg/bg-about.jpg")' }}
    >
      <div className="container m-auto lg:flex justify-center">
        <div className="flex items-center left lg:w-1/2">
          <div className="inner  ">
            <h2 className="font-bold leading-tight text-primary text-3xl md:text-4xl xl:text-5xl  uppercase pb-3">
              {aboutData.left.title}
            </h2>
          </div>
        </div>
        <div className="right lg:w-1/2 mt-10 lg:mt-0">
          {aboutData.right.map((item) => (
            <div key={item.title} className="item mb-10">
              <h3 className="font-bold text-primary pb-2">{item.title}</h3>
              <p className="text-secondary pb-10  inline-block">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
