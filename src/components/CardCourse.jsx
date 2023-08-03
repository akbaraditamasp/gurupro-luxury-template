import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { encodeNumberToLowerCase, slugify } from "../slugify";

export default function CardCourse({ title, price, id, throughPrice, image }) {
  return (
    <div className="flex flex-col border border-gray-400 rounded overflow-hidden relative">
      <div
        className="w-full relative border-b border-gray-400"
        style={{ paddingTop: "56.25%" }}
      >
        <img
          src={image}
          alt={title}
          title={title}
          className="absolute top-0 left-0 w-full h-full bg-purple-200 object-cover"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="font-bold font-montserrat line-clamp-2 mb-1">
          {title}
        </div>
        <div className="flex justify-start space-x-2">
          <div className="font-bold text-purple-600 text-sm">
            <NumericFormat
              value={price}
              thousandSeparator=","
              prefix="Rp"
              displayType="text"
            />
          </div>
          {throughPrice > 0 && (
            <div className="text-xs line-through">
              <NumericFormat
                value={throughPrice}
                thousandSeparator=","
                prefix="Rp"
                displayType="text"
              />
            </div>
          )}
        </div>
      </div>
      <Link
        to={`/course/${slugify(title)}-${encodeNumberToLowerCase(`${id}`)}`}
        title={title}
        className="absolute top-0 left-0 w-full h-full text-transparent"
      >
        {title}
      </Link>
    </div>
  );
}
