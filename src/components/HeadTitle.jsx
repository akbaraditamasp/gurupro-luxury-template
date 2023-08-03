export default function HeadTitle({ children, element: Element = "div" }) {
  return (
    <div className="font-bold font-montserrat text-2xl text-gray-800 mb-10">
      <Element>{children}</Element>
      <div className="h-1 bg-purple-600 w-20 rounded mt-1" />
    </div>
  );
}
