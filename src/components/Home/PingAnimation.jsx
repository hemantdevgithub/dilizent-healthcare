/* eslint-disable react/prop-types */

export default function PingAnimation({ children }) {
  return (
    <span className="relative flex h-20 w-20">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fff] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-20 w-20 bg-[#fff]  items-center justify-center">
        {children}
      </span>
    </span>
  );
}
