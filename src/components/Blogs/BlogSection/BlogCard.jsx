import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import moment from "moment"

const BlogCard = ({
  createdAt,
  content,
  topic_title,
  topic_desc,
  image_url,
}) => {
  const id = createdAt.length + topic_title.length + topic_desc.length

  return (
    <div className="rounded-xl border shadow-lg">
      <img
        src={image_url}
        className="rounded-xl rounded-b-none object-cover w-full h-[200px]"
        alt=""
      />
      <div className="my-4 px-5 space-y-4">
        <h2 className="text-xl text-justify text-secondary font-bold">
          {topic_title}
        </h2>
        {/* <div className='text-accent'>
                    {content}
                </div> */}
        <p>{topic_desc}...</p>
        <p className="text-primary font-semibold">
          Date: {moment(createdAt).format("MMMM Do YYYY")}
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
