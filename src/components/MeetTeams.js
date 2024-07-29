import React from "react";

function MeetTeams() {
  return (
    <div className="wrapper-meet-teams flex-wrap flex">
      <div className="left sm:w-1/2">
        <img src="/images/t1.jpg" alt="" />
      </div>
      <div className="right sm:w-1/2 bg-primary h-60 sm:h-auto">
        <div className="inner flex justify-center items-center h-full">
          <div className="content text-center mx-4 md:mx-14 lg:mx-24 xl:mx-48">
            <h3 className="text-white uppercase text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold leading-tight">
              Empowering Coaches for You
            </h3>
            <p className="text-white font-light pt-6 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eligendi perspiciatis accusamus enim maiores iure?
            </p>

            <a
              href=""
              className="text-white  px-4 py-2 bg-black rounded-3xl text-sm  uppercase inline-block mt-5 md:mt-10"
            >
              Meet Our Coaches
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTeams;
