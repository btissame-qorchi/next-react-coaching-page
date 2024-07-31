import React from "react";
import { useState } from "react";
import { useBasePath } from "../context/BasePathContext";

function Contact() {
  const [formData, setFormData] = useState({
    firstLastName: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const basePath = useBasePath();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log("Email envoyé avec succès");
      setFormData({
        name: "",
        email: "",
        tel: "",
        message: "",
      });
    } else {
      console.log("Erreur.");
    }
  };
  return (
    <div className="wrapper-contact flex flex-wrap ">
      <div className="left w-full lg:w-1/2 sm:flex justify-center items-center">
        <div className="inner">
          <div className="top text-center mt-24 lg:mt-0 mb-8 lx:mb-10">
            <h2 className="text-primary uppercase font-bold text-3xl xl:text-4xl">
              Connect with Us
            </h2>
          </div>
          <div className="form w-full sm:w-96">
            <form action="" className="lg:mb-0 mb-24">
              <div className="mb-2 xl:mb-4 sm:h-8 xl:h-9">
                <input
                  type="text"
                  onChange={handleChange}
                  required
                  name="name"
                  value={formData.firstLastName}
                  className="block w-full h-full placeholder-white focus:outline-none"
                  placeholder="Name *"
                />
              </div>
              <div className="mb-2 xl:mb-4 sm:h-8 xl:h-9">
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  required
                  className="block w-full h-full placeholder-white focus:outline-none"
                  placeholder="Email *"
                />
              </div>
              <div className="mb-2 xl:mb-4 sm:h-8 xl:h-9">
                <input
                  onChange={handleChange}
                  type="tel"
                  value={formData.tel}
                  className="block w-full h-full placeholder-white focus:outline-none"
                  placeholder="Phone "
                  name="tel"
                />
              </div>
              <textarea
                required
                onChange={handleChange}
                className="w-full xl:h-40 h-24 placeholder-white focus:outline-none>"
                name="message"
                value={formData.message}
                id=""
                cols="30"
                placeholder="Let us know how we can help..."
              ></textarea>
              <span className=" text-white text-xs">* Required fields</span>
              <button
                className="bg-white w-full h-8 xl:h-9 mt-3 text-black text-sm"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="right w-full hidden lg:block lg:w-1/2">
        <img src={`${basePath}/bg/bg3.jpg`} className="" alt="" />
      </div>
    </div>
  );
}

export default Contact;
