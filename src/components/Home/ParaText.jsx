/* eslint-disable react/prop-types */
export default function ParaText({ children, textColor }) {
  return (
    <p
      className={`
      text-lg
  ${textColor ? textColor : "text-accent"}
  `}
    >
      {children}
    </p>
  );
}
