import BlogsOrEvents from "./BlogsOrEvents";

export default function UpcomingEvents() {
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
      <BlogsOrEvents secName="Event" data={data} />
    </div>
  );
}
