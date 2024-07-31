import React from "react";
import teamsData from "@/data/teamsData";
import SocialLinks from "./SocialLinks";
import { useBasePath } from "../context/BasePathContext";

function Teams() {
  const basePath = useBasePath();
  return (
    <div className="wrapper-teams py-24 lg:py-32">
      <div className="container  mx-auto">
        <div className="top lg:flex mb-4">
          <div className="title pb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl uppercase text-primary font-bold">
              Meet Our <br /> Coaches
            </h2>
          </div>
          <div className="text max-w-lg lg:mx-auto">
            <p className="text-secondary ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur sed quibusdam laudantium fuga laboriosam nesciunt
              dolorum corporis.
            </p>
          </div>
        </div>
        <div className="items flex flex-wrap">
          {teamsData.map((item) => (
            <div key={item.name} className="item w-full sm:w-1/2 md:w-1/4 p-5">
              <div className="img overflow-hidden">
                <img src={`${basePath}${item.photo}`} alt="" />
              </div>
              <div className="description mt-7 pb-4">
                <h6 className="text-primary text-center font-bold text-xs  uppercase">
                  {item.name}
                </h6>
                <p className="text-secondary text-xs text-center pt-1">
                  {item.function}
                </p>
              </div>
              <div className="social-media mt-4">
                <SocialLinks social={item.social} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
