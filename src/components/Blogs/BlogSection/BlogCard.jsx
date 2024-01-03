import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import moment from "moment"

const BlogCard = ({ id, img, title, introduction, sections, conclusion }) => {

  return (
    <div className="rounded-xl h-full border shadow-lg">
      <img
        src={img}
        className="rounded-xl rounded-b-none object-cover w-full h-[200px]"
        alt=""
      />
      <div className="my-4 px-5 space-y-4">
        <h2 className="text-[22px] text-primary font-rubik font-semibold">
          {title}
        </h2>
        <p className="text-sm text-accent">
          {introduction?.slice(0, 250)}...
        </p>
      </div>
      <div className="px-5 my-5">
        <Link
          className="flex items-center gap-5 border-2 hover:bg-primary hover:text-white rounded-lg px-5 py-2 duration-200 w-fit"
          to={`/blogs/${id}`}
        >
          <span className="text-[18px] font-bold ">Continue Reading</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
