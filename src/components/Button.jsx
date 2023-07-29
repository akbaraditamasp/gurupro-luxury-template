export default function Button({
  element: Element = "a",
  className = "",
  children,
  ...props
}) {
  return (
    <Element
      className={
        "h-12 px-5 rounded flex items-center justify-center text-white " +
        className
      }
      {...props}
    >
      {children}
    </Element>
  );
}
