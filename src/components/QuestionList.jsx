import { useState } from "react";

export default function QuestionList({ title, children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="border border-gray-400 bg-gray-100 rounded mb-5 transition-all duration-500 overflow-hidden relative">
      <div className="relative p-5 flex items-center bg-gray-100">
        {title}
        <span className="ml-auto">{show ? "-" : "+"}</span>
        <button
          type="button"
          onClick={() => {
            setShow((value) => !value);
          }}
          className="absolute top-0 left-0 w-full h-full"
        ></button>
      </div>
      <div
        className={`${
          show ? "max-h-[1000px]" : "max-h-[0px]"
        } w-full overflow-hidden transition-all duration-500`}
      >
        <div
          className={"p-5 border-t border-gray-400 prose max-w-full"}
          dangerouslySetInnerHTML={{ __html: children }}
        ></div>
      </div>
    </div>
  );
}
