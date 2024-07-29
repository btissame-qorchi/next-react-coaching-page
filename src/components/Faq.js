import React, { useState, useEffect } from "react";
import axios from "axios";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faq, setFaq] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setFaq(response.data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching faqs:", error);
      }
    };
    fetchFaq();
  }, []);

  return (
    <div className="wrapper-faq py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="top">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center text-primary uppercase">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="items mt-14 lg:mt-20 w-full md:w-2/3 mx-auto">
          {faq.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`${
                  openIndex === index ? "bg-white text-black" : "text-white"
                } px-5 w-full text-left text-xl h-16 border border-white hover:text-black hover:bg-white transition duration-300 ease-in-out`}
              >
                {faq.title} ?
              </button>
              {openIndex === index && (
                <div className="description border border-white p-5">
                  <p className="mt-2  text-white">{faq.body} .</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
