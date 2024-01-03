import ParaText from "../ParaText";

export default function ProjectSlider() {
  return (
    <div
      className="
    mt-24
    group
    relative "
    >
      <img
        className="
      w-full
      rounded-md"
        src="/home/project-1.jpg"
        alt=""
      />

      {/* hover effect */}
      <div
        className="
      absolute
      top-0
      bottom-0
      left-0
      right-0
      bg-primary/30
      hidden
      group-hover:block"
      >
        <div
          className="
        absolute
        left-0
        p-5
        bottom-5
        rounded-r-lg
        transition-up
        bg-white"
        >
          <ParaText textColor="text-primary">Digital Marketing</ParaText>
          <h4
            className="
            text-[28px]
            font-bold
            text-secondary
          "
          >
            Market Analysis
          </h4>
        </div>
      </div>
    </div>
  );
}
