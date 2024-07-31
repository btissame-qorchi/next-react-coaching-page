import React, { useState } from "react";
import servicesData from "@/data/servicesData";
import ServicePopup from "./ServicePopup";
import { useBasePath } from "../context/BasePathContext";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const openPopup = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };
  const basePath = useBasePath();

  return (
    <div className="wrapper-service bg-black pb-16 pt-24 lg:pb-30 lg:pt-32">
      <div className="container mx-auto">
        <div className="top lg:flex mb-4">
          <div className="title pb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl uppercase text-primary font-bold">
              Our services
            </h2>
          </div>
          <div className="text max-w-lg  lg:mx-auto">
            <p className="text-secondary ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur sed quibusdam laudantium fuga laboriosam nesciunt
              dolorum corporis.
            </p>
          </div>
        </div>
        <div className="items flex flex-wrap justify-between">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="item mb-10 sm:mb-0 w-full sm:w-1/2 md:w-1/4 sm:p-3 lg:p-5 cursor-pointer"
              onClick={() => openPopup(service)}
            >
              <div className="img overflow-hidden">
                <img
                  src={`${basePath}/service.image`}
                  className="transition-transform hover:scale-110 duration-300"
                  alt=""
                />
              </div>
              <div className="text md:px-0 px-2 py-3">
                <h6 className="text-secondary sm:text-xs md:text-sm lg:text-lg uppercase">
                  {service.text}
                </h6>
              </div>
            </div>
          ))}
        </div>
        {selectedService && (
          <ServicePopup service={selectedService} onClose={closePopup} />
        )}
      </div>
    </div>
  );
}

export default Services;
