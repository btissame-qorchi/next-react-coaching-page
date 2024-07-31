import React from "react";
import kfData from "@/data/kfData";
import { useBasePath } from "../context/BasePathContext";

function KeyFigures() {
  const basePath = useBasePath();
  console.log("Base Path:", basePath);
  return (
    <div
      className="wrapper-kf bg-cover py-24 lg:py-32"
      style={{ backgroundImage: 'url("bg/bg-kf.jpg")' }}
    >
      <div className="container mx-auto flex-wrap flex">
        {kfData.map((item) => (
          <div
            key={item.text}
            className="item mb-10 sm:mb-0 w-full sm:w-1/2 md:w-1/4"
          >
            const imagePath = `${basePath}${item.image}`;
            <div className="icon mb-5 w-12 mx-auto">
              <img
                className="mx-auto"
                src={`${basePath}${item.image}`}
                alt=""
              />
            </div>
            <div className="key mb-3 text-2xl">
              <h6 className="text-center font-bold text-secondary">
                {item.key}
              </h6>
            </div>
            <div className="description">
              <p className="text-secondary text-md text-center">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFigures;
