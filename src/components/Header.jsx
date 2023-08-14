import { useEffect, useState } from "react";
import { Link, useRouteLoaderData } from "react-router-dom";
import Container from "./Container";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const rootData = useRouteLoaderData("root");
  const [hideMenu, setHideMenu] = useState(true);

  useEffect(() => {
    const scrollHandle = () => {
      setScroll(window.scrollY);
    };

    document.addEventListener("scroll", scrollHandle, { passive: true });

    return () => {
      document.removeEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <Container
      element="header"
      containerClassName={`fixed top-0 left-0 w-full h-20 z-10 bg-white ${
        scroll > 20 ? "bg-opacity-100" : "bg-opacity-50"
      } border-b border-gray-400 transition duration-500`}
      className="flex justify-between items-center"
    >
      {rootData.variables?.logo && (
        <Link to="/" title={rootData.variables?.title || "Home"}>
          <img
            src={rootData.variables?.logo}
            className="h-8 w-auto"
            title={rootData.variables?.title || "Home"}
            alt={rootData.variables?.title || "Home"}
          />
        </Link>
      )}
      <button
        type="button"
        className="block lg:hidden p-5 -mx-5 text-xl"
        onClick={() => setHideMenu(false)}
      >
        <RiMenu3Fill />
      </button>
      <nav
        className={`fixed top-0 left-0 right-0 bg-white lg:bg-transparent lg:static transition duration-500 transform ${
          hideMenu
            ? "-translate-y-full"
            : "translate-y-0 shadow-lg lg:shadow-none"
        } lg:translate-y-0`}
      >
        <div className="border-b p-5 flex items-center justify-between h-20 lg:hidden">
          <img
            src={rootData.variables?.logo}
            className="h-8 w-auto"
            title={rootData.variables?.title || "Home"}
            alt={rootData.variables?.title || "Home"}
          />
          <button
            type="button"
            className="p-5 -mx-5 text-xl"
            onClick={() => setHideMenu(true)}
          >
            <RiCloseFill />
          </button>
        </div>
        <ul
          className={`flex flex-col lg:flex-row justify-start items-stretch py-5 lg:py-0 lg:justify-end lg:items-center space-x-0 lg:space-x-2 mx-0 lg:-mx-5`}
        >
          <li>
            <Link
              to="/"
              title="Home"
              className="block font-bold text-sm py-3 px-5 rounded bg-transparent hover:bg-black hover:bg-opacity-20"
              onClick={() => setHideMenu(true)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              title="Kursus Saya"
              className="block font-bold text-sm py-3 px-5 rounded bg-transparent hover:bg-black hover:bg-opacity-20"
              onClick={() => setHideMenu(true)}
            >
              Kursus
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              title="Blog Saya"
              className="block font-bold text-sm py-3 px-5 rounded bg-transparent hover:bg-black hover:bg-opacity-20"
              onClick={() => setHideMenu(true)}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
