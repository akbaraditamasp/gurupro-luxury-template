import { Link, useMatches, useRouteLoaderData } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const rootData = useRouteLoaderData("root");

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
      <nav>
        <ul className="flex justify-end items-center space-x-2 -mx-5">
          <li>
            <Link
              to="/"
              title="Home"
              className="block font-bold text-sm py-3 px-5 rounded bg-transparent hover:bg-black hover:bg-opacity-20"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              title="Kursus Saya"
              className="block font-bold text-sm py-3 px-5 rounded bg-transparent hover:bg-black hover:bg-opacity-20"
            >
              Kursus
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              title="Blog Saya"
              className="block font-bold text-sm py-3 px-5 rounded bg-transparent hover:bg-black hover:bg-opacity-20"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
