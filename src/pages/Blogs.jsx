import axios from "axios"
import React, { useEffect, useState } from "react"
import TopBanner from "../components/TopBanner/TopBanner"
import FilterMenu from "../components/Blogs/FilterMenu/FilterMenu"
import useBlogs from "../hooks/useBlogs"
import { shallow } from "zustand/shallow"
import BlogCard from "../components/Blogs/BlogSection/BlogCard"

const Blogs = () => {
  const { setBlogdata, blogData } = useBlogs(
    (state) => ({
      setBlogdata: state.setBlogdata,
      blogData: state.blogData,
    }),
    shallow
  )

  const getBlog = async () => {
    const res = await axios.get(
      "http://mws.dignityofnoble.org/api/v1/blog-posting/published-diligent-topics"
    )
    setBlogdata(res.data.data)
  }

  useEffect(() => {
    getBlog()
  }, [])

  return (
    <div>
      <TopBanner
        heading={"Blogs"}
        pageName={"Blogs"}
        img={"/blog/top-banner.jpg"}
      ></TopBanner>
      <div className="w-[90%] my-20 mx-auto flex flex-col lg:flex-row gap-5">
        <div className="lg:w-[25%]">
          <FilterMenu />
        </div>
        <div className="w-full lg:w-[75%]">
          <div className="w-full lg:px-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
            {blogData?.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
