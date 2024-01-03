import BlogsOrEvents from "./BlogsOrEvents";

export default function UpcomingBlogs() {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <div
      className="
    bg-[#F6F9FEAB]"
    >
      <BlogsOrEvents secName="Blog" data={data} />
    </div>
  );
}
