/* eslint-disable react/prop-types */
import { AiFillClockCircle, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function BlogEventCard({ secName }) {
  return (
    <div
      className="
  max-w-sm
  bg-white
  rounded-[20px]
  overflow-hidden
  shadow-md
  group

  "
    >
      {/* img  */}
      <img
        className="
rounded-t-[20px]
h-auto
w-full
group-hover:scale-110
transition
duration-500
"
        src="/home/blog.jpg"
        alt=""
      />

      <div
        className="
      px-[30px]
      py-[40px]
      relative"
      >
        {/* absolute */}
        <div
          className="
        absolute
        bg-primary
        px-6
        py-2
        text-white
        rounded-lg
        -top-4

        "
        >
          <span>11 09, 23</span>
        </div>

        {/* card top */}
        <div
          className="
        border-b
        border-gray-200
        text-sm
        flex
        justify-between
        items-center
        pb-5
        "
        >
          {/* 1st */}
          <div
            className="
            flex
            items-center
            gap-2
            text-gray-500
          "
          >
            <div
              className="
            bg-primary/20
            p-2
            rounded-full
            "
            >
              <AiFillClockCircle
                className="
              text-primary"
              />
            </div>
            <span>03:00 PM - 06:00 </span>
          </div>
          {/* 2nd */}
          {/* 1st */}
          <div
            className="
            flex
            items-center
            gap-2
            text-gray-500
          "
          >
            <div
              className="
            bg-primary/20
            p-2
            rounded-full
            "
            >
              <AiFillClockCircle
                className="
              text-primary"
              />
            </div>
            <span>03:00 PM - 06:00 </span>
          </div>
        </div>

        {/* card body */}
        <div>
          <p
            className="
          text-[20px]
          font-semibold
          leading-[30px]
          text-secondary
          hover:text-primary
          transition
          duration-500
          cursor-pointer
          mt-5
          mb-7"
          >
            How to learn smart fluent English very elegantly for kids
          </p>
        </div>

        {/* card end */}
        <div>
          <Link to={secName === 'Blog' ? '/blogs' : '/' }>
            <button
              className="
          flex
          gap-3
          items-center
          border
          rounded-md
          border-primary
          hover:bg-primary
          text-primary
          hover:text-white
          transition
          duration-500
          py-3
          px-6"
            >
              <span>View {secName}</span>
              <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
