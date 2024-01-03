/* eslint-disable react/prop-types */
import Container from "../../shared/Container";
import TextHeading from "../TextHeading";
import BlogEventCard from "./BlogEventCard";

export default function BlogsOrEvents({ secName, data }) {
  return (
    <Container className="pt-20">
      {/* heading */}
      <div
        className="
      flex
      flex-col
      md:flex-row 
      justify-between
      text-center
      md:text-start

      
      "
      >
        <TextHeading>
          {secName === "Blog" ? "Recent Blogs" : "Upcoming Events"}
        </TextHeading>

        {/* button */}
        <button
          className="
        px-6
        py-3
        text-lg
        font-semibold
        text-white
        bg-primary
        flex
        items-center
        justify-center
        rounded-lg"
        >
          View All {secName}
        </button>
      </div>

      <div
        className="
     grid
     grid-cols-1
     md:grid-cols-2
     lg:grid-cols-3
     my-14
     justify-items-center

      "
      >
        {data?.map((card) => (
          <BlogEventCard secName={secName} key={card.id} />
        ))}
      </div>
    </Container>
  );
}
