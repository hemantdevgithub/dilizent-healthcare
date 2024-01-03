/* eslint-disable react/prop-types */

export default function TextHeading({ children, textColor, className }) {
  return (
    <h2
      className={`
        ${className || ""}
        ${textColor || "text-secondary"} 
        text-[32px]
        md:text-[50px]
        font-bold
        leading-[60px]`}
    >
      {children}
    </h2>
  );
}
