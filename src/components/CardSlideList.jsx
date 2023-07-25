export default function CardSlideList({ title, children }) {
  return (
    <div className="w-[85%] lg:w-[30%] flex-shrink-0 border border-gray-400 rounded">
      <div className="p-4 px-5 relative font-bold font-poppins">
        {title}
        <div
          className="absolute top-4 bottom-4 left-0 w-1 rounded-r-sm"
          style={{ backgroundColor: "#2D4356" }}
        ></div>
      </div>
      <div className="px-5 pb-4">{children}</div>
    </div>
  );
}
