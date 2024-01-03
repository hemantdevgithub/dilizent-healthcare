import { motion } from "framer-motion";
import Button from "../global/Button";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { FaArrowRight }  from "react-icons/fa"
const Hero = () => {
  return (
    <div className='h-[400px] lg:h-[630px] banner-height font-poppins bg-[url(/home/hero2.jpg)] bg-center bg-cover w-full'>
      <Container>
        <div className='w-full lg:w-[65%] h-full gap-6 flex sm:text-center md:text-start flex-col items-center lg:items-start justify-center text-center text-white'>
          <p>
            Healthcare Information Technology Solutions
          </p>
          <h4 className='font-rubik text-lg lg:text-3xl flex text-white'>
            Streamline healthcare IT infrastructure, improve interoperability, and ensure system security
          </h4>
          <p className='text-sm lg:text-base font-semibold text-white'>
            Your enterprise healthcare IT partner to facilitate centralized decision making and empower the delivery of quality patient care.
          </p>
          {/* <h1 className='text-xl lg:text-4xl text-secondary'>
                        "Guiding Healthcare Excellence: Your Partner in Strategic Solutions for a Healthier Tomorrow."
                    </h1> */}
          <Link
            to={"/services"}
          >
            <button className='bg-primary text-white rounded-md py-3 w-[200px] flex items-center justify-center gap-3'>
              Learn More
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
