// src/components/ServicePopup.js
import React from "react";

const ServicePopup = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-8  shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4 text-primary uppercase">
          {service.text}
        </h2>
        <p className="text-md text-black">{service.description}</p>
        <button
          onClick={onClose}
          className="mt-4 text-sm px-4 py-2 bg-red-500 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServicePopup;
