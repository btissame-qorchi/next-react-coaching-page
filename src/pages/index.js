import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import KeyFigures from "@/components/KeyFigures";

import React from "react";
import MeetTeams from "@/components/MeetTeams";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

function index() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <MeetTeams />
      <Teams />
      <KeyFigures />
      <Testimonials/>
      <Contact/>
      <Faq/>
      
    </div>
  );
}

export default index;
