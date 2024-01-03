import React from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import TestimonialSection from "../components/Testimonials/TestimonialSection/TestimonialSection";
 
const Testimonials = () => {
  return (
    <div>
      <TopBanner
        heading={"Testimonials"}
        img={"/services/service-bg.jpg"}
        pageName={"Testimonials"}
      />
      <TestimonialSection />
    </div>
  );
};

export default Testimonials;
