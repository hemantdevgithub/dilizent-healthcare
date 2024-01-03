import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonailCard";

const TestimonialSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sai Satyadeep Kotla",
      designation: "Founder&President, Dignity of Noble",
      casestudy:"Dilizent is delivering a social mission platform, an AI-based Ed tech to the Entrepreneurship journey platform for Dignity of Noble, a public benefit organization for people with barriers. The freemium platform contains the DON's Entrepreneurship course curriculum with exams and quizzes and further builds real business portfolios with real customers for people with barriers",
      Testimonial:"Dilizent's innovative solutions have consistently exceeded our expectations. Their commitment to excellence and rapid response to our evolving needs have made them an invaluable partner in our technology journey",  
      img: "https://media.licdn.com/dms/image/C5603AQFmE9jFLj5gsQ/profile-displayphoto-shrink_400_400/0/1648856269331?e=1703116800&v=beta&t=_W4tEAiCVsBYI1fyRtcaXTLcqjESj0qAH5NlZH2uqdY",
    },
    {
      id: 2,
      name: "Mayank Patel",
      img: "https://media.licdn.com/dms/image/C4D03AQF_dETSxGskag/profile-displayphoto-shrink_400_400/0/1651202231057?e=1703116800&v=beta&t=nclSL2CER2MSwmoaVwZ_sqC6US9X4C8kG2EI6N7oQ_4",
      designation: "Director, Noblespiritz",
      casestudy:
        "Dilizent is building a digital platform solution for NobleSpiritz, a non-profit based out of the USA. The digital platform will help people with berries to receive free job skill material from top-class tutors and mentors from various parts of the world.",
      Testimonial:"Working with Dilizent has been a game-changer for our business. Their expertise and dedication to delivering top-notch technology solutions have driven our success to new heights",
      
    },
    // {
    //   id: 3,
    //   name: "Phani Phenumatsa",
    //   img: "https://mediclinicals.com/wp-content/uploads/2021/10/MEDICLINICALS-logo.pnghttps://mediclinicals.com/wp-content/uploads/2021/10/MEDICLINICALS-logo.png",
    //   designation: "Director, Mediclinicals",
    //   casestudy:
    //     "When we first approached Globallyz, we were struggling to reach our target audience and generate leads. But their team quickly assessed our needs and developed a comprehensive marketing strategy that has transformed our business",
    //   Testimonial:"hi",
        
    // },
    {
      id: 4,
      name: "Phani",
      designation: "Sr Director, Ravsol",
      casestudy:
        "Dilizent built a professional ATS platform for Ravsol that helps Ravsol to track jobs and applicants.        ",
      img: "https://media.licdn.com/dms/image/C4E03AQGH2XhK-l5g2A/profile-displayphoto-shrink_400_400/0/1561928039108?e=1703116800&v=beta&t=Pb-aUfg1yABHSpM-hF_PClsk2hf26PsUmiYgfLxwNkQ",
      Testimonial:"Dilizent has truly transformed the way we approach technology. Their team's deep knowledge and dedication to our project have resulted in not just successful delivery but a strategic partnership",
   
    },
    {
      id: 5,
      name: "NAVEEN",
      designation: "Director,Mediclinicals",
      casestudy:
        "Dilizent has built claims double adjudication and a healthcare asset management platform for Mediclinicals.",
      Testimonial:"Dilizent is not just a technology partner; they're an extension of our team. Their proactive approach and reliable delivery have significantly enhanced our business operations.",
        img: "",
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
        {reviews?.map((review) => (
          <TestimonialCard key={review?.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
