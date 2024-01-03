/* eslint-disable react/prop-types */
export default function SectionBackgroundImage({
  bg_image,
  className,
  children,
}) {
  return (
    <section
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`${className || ""} `}
    >
      {children}
    </section>
  );
}
