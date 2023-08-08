import { Link } from "react-router-dom";
import { encodeNumberToLowerCase, slugify } from "../slugify";

export default function CardContent({ title, description, image, id }) {
  return (
    <div className="flex flex-col border border-gray-400 rounded overflow-hidden">
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
        <div className="font-bold font-montserrat line-clamp-2 mb-2">
          {title}
        </div>
        <div className="line-clamp-4 text-justify text-sm">{description}</div>
      </div>
      <Link
        to={`/${slugify(title)}-${encodeNumberToLowerCase(`${id}`)}`}
        className="p-4 bg-gray-100 mt-4 border-t text-sm"
        title={title}
      >
        Lihat Selengkapnya &raquo;
      </Link>
    </div>
  );
}
