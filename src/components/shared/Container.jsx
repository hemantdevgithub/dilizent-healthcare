// eslint-disable-next-line react/prop-types
export default function Container({ children, className }) {
  return (
    <div
      className={`
      ${className || ""}
      max-w-screen-xl
      mx-auto
      px-4
      w-full`}
    >
      {children}
    </div>
  );
}
