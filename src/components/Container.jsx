export default function Container({
  containerClassName = "",
  children,
  className = "",
  element: Element = "div",
  containerProps = {},
  ...props
}) {
  return (
    <div
      {...containerProps}
      className={`${containerClassName} w-full px-5 lg:px-8 flex justify-center`}
    >
      <Element
        className={`w-full lg:w-[900px] xl:w-[1200px] ${className}`}
        {...props}
      >
        {children}
      </Element>
    </div>
  );
}
