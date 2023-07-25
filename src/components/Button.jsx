import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link
      className="h-12 px-5 rounded flex items-center justify-center text-white"
      {...props}
    >
      Bergabung Sekarang
    </Link>
  );
}
