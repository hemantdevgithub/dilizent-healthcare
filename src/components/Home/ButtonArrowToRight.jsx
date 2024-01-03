import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
export default function ButtonArrowToRight({ textColor }) {
  return (
    <button
      className={`
      mt-5  
      flex 
      gap-2 
      items-center
      text-lg
      font-medium
${textColor ? textColor : "text-secondary"}
      `}
    >
      <span>Read more</span> <BsArrowRight />
    </button>
  );
}
