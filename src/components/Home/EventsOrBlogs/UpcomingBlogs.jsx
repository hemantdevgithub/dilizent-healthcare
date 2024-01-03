import { Link } from "react-router-dom";
import { blogs } from "../../../constants/blogs";
import BlogCard from "../../Blogs/BlogSection/BlogCard";
import Container from "../../Container/Container";
import BlogsOrEvents from "./BlogsOrEvents";

export default function UpcomingBlogs() {


  return (
    <Container>
      <div className="py-20 space-y-10">
        <div className="flex justify-between">
          <h1 className="text-2xl text-primary">Read Our All Blogs</h1>
          <Link to={'/blogs'}>
            <button className="bg-primary px-10 py-2 text-white font-poppins rounded-md">Blogs</button>
          </Link>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {
            blogs.slice(0, 3).map(b => <BlogCard key={b.id} {...b} />)
          }
        </div>
      </div>
</Container>
  );
}
