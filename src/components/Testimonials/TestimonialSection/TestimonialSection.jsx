import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonailCard";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 2,
      name: "Nitin Gupta",
      designation: "Director, PrimeWell Health Group",
      casestudy:
        "Dilizent is building a digital platform solution for NobleSpiritz, a non-profit based out of the USA. The digital platform will help people with berries to receive free job skill material from top-class tutors and mentors from various parts of the world.",
      testimonial:
        "Working with Dilizent has been a game-changer for our business. Their expertise and dedication to delivering top-notch technology solutions have driven our success to new heights.",
      img: "https://t4.ftcdn.net/jpg/03/11/50/27/360_F_311502737_TZ2RJj273mcoaZyKBSHqbdM7QMcb6HfP.jpg",
    },
    {
      id: 4,
      name: "Rahul Mehta",
      designation: "Sr Director, HealthScribe Systems",
      casestudy:
        "Dilizent built a professional ATS platform for Ravsol that helps Ravsol to track jobs and applicants.",
      testimonial:
        "Dilizent has truly transformed the way we approach technology. Their team's deep knowledge and dedication to our project have resulted in not just successful delivery but a strategic partnership.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwg1ijx9-eej5d1nPCy1FsZ1zjQD-EWa5pA&usqp=CAU",
    },
    {
      id: 5,
      name: "Smita Joshi",
      designation: "Director, CareSoft Technologies",
      casestudy:
        "Dilizent has built claims double adjudication and a healthcare asset management platform for Mediclinicals.",
      testimonial:
        "Dilizent is not just a technology partner; they're an extension of our team. Their proactive approach and reliable delivery have significantly enhanced our business operations.",
      img: "https://static.everypixel.com/ep-gallerystock/1128/7181/7247/03361/11287181724703361572.jpg",
    },
  ];


  return (
    <div className="py-20">
      <div className="flex justify-center items-center my-7">
        <div className="relative ">
          <h2 className="text-2xl lg:text-[45px] text-center text-secondary font-bold">
            Case Study & Testimonials
          </h2>
          <div className="border-[5px] border-b-0 border-r-0 absolute -top-4 -left-8 border-primary h-7 w-7 lg:h-12 lg:w-12"></div>
          <div className="border-[5px] border-b-0 border-l-0 absolute -top-4 -right-8 border-primary h-7 w-7 lg:h-12 lg:w-12"></div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="w-[75%] mx-auto">
        {/* mapping reviews */}
        {testimonials?.map((review) => (
          <TestimonialCard key={review?.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
