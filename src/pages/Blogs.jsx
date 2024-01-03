import axios from "axios"
import React, { useEffect, useState } from "react"
import TopBanner from "../components/TopBanner/TopBanner"
import FilterMenu from "../components/Blogs/FilterMenu/FilterMenu"
import useBlogs from "../hooks/useBlogs"
import { shallow } from "zustand/shallow"
import BlogCard from "../components/Blogs/BlogSection/BlogCard"
import Container from "../components/Container/Container"
import { blogs } from "../constants/blogs"

const Blogs = () => {


  return (
    <div>
      <TopBanner
        heading={"Blogs"}
        pageName={"Blogs"}
        img={"/blog/top-banner.jpg"}
      />
      <Container>
        <div className="py-10 space-y-10">
          <h1 className="text-center text-3xl font-rubik font-semibold text-primary">Our Blogs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              blogs.map(blog => (
                <BlogCard {...blog} />
              ))
            }
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blogs
