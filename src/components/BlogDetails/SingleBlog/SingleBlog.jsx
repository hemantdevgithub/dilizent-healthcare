import React from "react"
import { BiComment, BiLike } from "react-icons/bi"
const SingleBlog = ({
  image_url,
  title,
  content,
  createdAt,
  likes,
  comments,
}) => {
  return (
    <div>
      <div>
        <img
          src={image_url}
          className="rounded-md lg:h-[500px] object-cover w-full"
          alt=""
        />
        <h2 className="text-3xl px-3 text-secondary font-bold text-justify my-3">
          {title}
        </h2>
        <div className="h-[1px] w-full bg-primary"></div>
      </div>
      <div className="my-8 px-3">
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-xl text-accent text-justify"
        />
      </div>
      <div>
        <h2 className="text-2xl text-secondary font-semibold">Insights</h2>
        <div className="h-[1px] w-full bg-primary my-2"></div>
        <div className="flex justify-between my-3 px-5">
          <div className="flex items-center text-3xl gap-5 text-primary">
            <BiLike />
            <span className="text-secondary">{likes}</span>
          </div>
          <div className="flex items-center text-3xl gap-5 text-primary">
            <BiComment />
            <span className="text-secondary">{comments}</span>
          </div>
        </div>
      </div>
      <div className="my-5 rounded-md py-4">
        <h2 className="text-xl text-secondary">Write Comment</h2>
        <textarea
          name=""
          className="input h-[155px] py-4 text-accent pl-10 w-full bg-[#F7F7F7E6]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-lg my-3"
        ></textarea>
        <button className="bg-primary px-5 py-3 rounded-full text-white font-bold text-xl">
          Post Comment
        </button>
      </div>
    </div>
  )
}

export default SingleBlog;
