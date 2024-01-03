import React, { useEffect, useState } from "react"
import TopBanner from "../components/TopBanner/TopBanner"
import SingleBlog from "../components/BlogDetails/SingleBlog/SingleBlog"
import RecentBlog from "../components/BlogDetails/RecentBlog/RecentBlog"
import { useParams } from "react-router-dom"
import useBlogs from "../hooks/useBlogs"
import { shallow } from "zustand/shallow"
import { blogs } from "../constants/blogs"
import Container from "../components/Container/Container"

const BlogDetails = () => {
  const { id } = useParams()
  const filteredBlog = blogs.find(b => b.id === parseInt(id));
  console.log(filteredBlog);
  return (
    <div>
      <TopBanner
        heading={"Blogs Details"}
        pageName={"Blogs"}
        img={"/blog/top-banner.jpg"}
      />
      <Container>
        <div className="py-20 mx-auto space-y-5 w-[80%]">
          <img
            src="https://s35764.pcdn.co/wp-content/uploads/2022/11/KLG-BMKT-emeritus-650x325.jpg.optimal.jpg"
            className="mx-auto w-full rounded-t-md"
            alt="" />
          <div className="font-poppins space-y-5 p-5">
            <h1 className="text-2xl font-semibold font-rubik ">{filteredBlog.title}</h1>
            <p>
              <span className="text-lg font-semibold mr-2">Introduction :</span>
              {filteredBlog.introduction}
            </p>
            {
              filteredBlog.sections?.map(s => (
                <div className="space-y-3">
                  <h3 className="text-xl text-secondary ">{s.title}</h3>
                  <h3 className="text-sm text-accent">{s.content}</h3>
                </div>
              ))
            }
            <p>
              <span className="text-lg font-semibold mr-2">Conclusion :</span>{filteredBlog.conclusion}
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BlogDetails
