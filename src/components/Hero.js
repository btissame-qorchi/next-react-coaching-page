import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import sliderHeroData from "@/data/sliderHeroData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useBasePath } from "../context/BasePathContext";

function Hero() {
  const basePath = useBasePath();

  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    document
      .querySelectorAll(".slick-track .slick-slide > div")
      .forEach((item) => {
        item.classList.add("slick-item");
      });
  }, []);

  return (
    <div className="md:h-full wrapper-hero">
      <div className="flex  w-full md:h-screen">
        <div className="hero w-full md:h-screen relative">
          <Slider {...heroSliderSettings}>
            {sliderHeroData.map((slide) => (
              <div
                key={slide.image}
                className="container m-auto flex-wrap md:flex relative md:h-full"
              >
                <div className="wrapper-content relative z-10 mt-20 flex justify-center items-center w-full md:max-w-xl  lg:max-w-2xl">
                  <div>
                    <div className="title-slide text-3xl sm:text-4xl lg:text-5xl xl:text-7xl uppercase font-bold  text-white">
                      <h2>{slide.title}</h2>
                    </div>
                    <div className="text-slide  text-white pt-6">
                      <p className="text-secondary text-md">{slide.text}</p>
                    </div>
                    <div className="btn-more mt-8">
                      <a
                        href=""
                        className="text-black  px-4 py-2 uppercase bg-white  rounded-3xl"
                      >
                        {slide.buttonText}
                        <FontAwesomeIcon className="ml-3" icon={faArrowRight} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:max-w-lg sm:max-w-80 mt-16 md:mt-0  relative mx-auto md:max-w-96 image md:absolute bottom-0 right-0">
                  <img src={`${basePath}${slide.image}`} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
