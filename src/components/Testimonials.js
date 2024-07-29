import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const testimonialsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Pour les écrans larges, afficher 3 sliders
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Pour les écrans de taille moyenne (tablettes)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setTestimonials(response.data.slice(0, 6)); // Prendre les 10 premiers témoignages
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    console.log(testimonials.results);
  }, [testimonials]);

  return (
    <div className="wrapper-testimonials py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="top lg:flex mb-4">
          <div className="title pb-8">
            <h2 className="text-3xl md:text-4xl xl:text-5xl uppercase text-primary font-bold">
              Hear from <br /> Our Clients
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

        <div className="items mt-20 ">
          <Slider {...testimonialsSliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="name mb-3">
                  <h5 className="font-bold text-primary">
                    {testimonial.name.split(" ").slice(0, 3).join(" ")}
                  </h5>
                </div>
                <div className="email mb-3">
                  <span className="text-secondary font-bold">
                    {testimonial.email}
                  </span>
                </div>
                <div className="description pr-0 sm:pr-10 lg:pr-24">
                  <p className="text-secondary">{testimonial.body}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
