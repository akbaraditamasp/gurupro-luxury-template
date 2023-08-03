export default function CardContent() {
  return (
    <div className="flex flex-col border border-gray-400 rounded overflow-hidden">
      <div
        className="w-full relative border-b border-gray-400"
        style={{ paddingTop: "56.25%" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-purple-200"></div>
      </div>
      <div className="flex-1 p-4">
        <div className="font-bold font-montserrat line-clamp-2 mb-2">
          Tutorial Membangun Candi Dalam 1 Malam
        </div>
        <div className="line-clamp-4 text-justify text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          mauris nec odio sodales finibus sed fringilla mauris. Duis at cursus
          nisi, quis rutrum arcu. Vivamus euismod ut leo in malesuada. In vel
          diam eleifend, molestie sapien et, euismod quam. Ut pharetra id est
          vitae euismod. Pellentesque nec mi velit. Aenean iaculis tortor
          tortor, non blandit elit ultrices id. Sed tempus tempus placerat.
        </div>
      </div>
      <div className="p-4 bg-gray-100 mt-4 border-t text-sm">
        Lihat Selengkapnya &raquo;
      </div>
    </div>
  );
}
