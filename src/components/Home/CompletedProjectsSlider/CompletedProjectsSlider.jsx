import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"
import "swiper/swiper-bundle.min.css"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import bg from "/home/portfolio-bg00.jpg"
import Container from "../../shared/Container"
import ProjectSlider from "../CompletedProjectsSlider/ProjectSlider"
import SectionBackgroundImage from "../../shared/SectionBackgroundImage"

const CompletedProjectsSlider = () => {
  const projects = [
    {
      id: 1,
      heading: "Healthcare Applications",
      subHeading: "A comprehensive suite of healthcare IT solutions",
      img: "https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
    },
    {
      id: 1,
      heading: "Secure Payment Gateway",
      subHeading: "A security and communications platform",
      img: "https://img.freepik.com/premium-vector/payment-gateway-flat-illustration-is-up-premium-use_203633-2998.jpg"
    },
    {
      id: 1,
      heading: "Enrollment Platforms",
      subHeading: "A solution focused on streamlining enrollment processes",
      img: "https://img.freepik.com/free-vector/online-school-platform-abstract-concept-vector-illustration-homeschooling-covid2019-qarantine-online-education-platform-digital-classes-virtual-courses-lms-school-abstract-metaphor_335657-5850.jpg"
    },
  ]
  return (
    <SectionBackgroundImage
      bg_image={bg}
      className="
      relative
      lg:pt-[100px]
      pb-20
      "
    >
      <Container>
        <Swiper
          className="
          mx-auto 
          p-4 
          pb-10
          "
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          onSlideChange={""}
          onSwiper={""}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <div
            className="
          top-10
          absolute
          bg-secondary
          "
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectSlider {...project} />
              </SwiperSlide>
            ))}
          </div>

          <div
            className="
          absolute
          top-0
          z-[999]
          flex
          flex-col
          lg:flex-row
          w-full
          justify-between"
          >
            <h1
              className="
              text-lg
             md:text-[32px]
             lg:text-[50px]
             font-bold
             leading-[60px]
             text-white"
            >
              Our Completed Projects{" "}
            </h1>
            {/* navigating button  */}
            <div className="flex gap-5 ">
              {/* custom prev button */}
              <div
                className="
        custom-prev
        cursor-pointer
        bg-white
        p-4
        rounded-full
        border-2 
        border-primary
        group
        hover:bg-primary
        duration-200
        

        "
              >
                <BsArrowLeft
                  className="
              
              text-primary
              group-hover:text-white
              text-2xl
              
              "
                />
              </div>

              {/* custom next button */}
              <div
                className="
        custom-next
        cursor-pointer
        bg-white
        p-4
        rounded-full
        border-2 
        border-primary
        group
        hover:bg-primary
        duration-200
       

        "
              >
                <BsArrowRight
                  className="
              
              text-primary
              group-hover:text-white
              text-2xl
              
              "
                />
              </div>
            </div>
          </div>
        </Swiper>
      </Container>
    </SectionBackgroundImage>
  )
}

export default CompletedProjectsSlider
