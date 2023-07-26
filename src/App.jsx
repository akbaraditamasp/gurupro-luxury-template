import { Fragment, useEffect, useRef, useState } from "react";
import {
  CgChevronDoubleDown,
  CgChevronLeft,
  CgChevronRight,
  CgFacebook,
  CgInstagram,
  CgYoutube,
} from "react-icons/cg";
import Container from "./components/Container";
import CardSlideList from "./components/CardSlideList";
import QuestionList from "./components/QuestionList";
import Button from "./components/Button";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function App() {
  const data = useLoaderData();
  const [active, setActive] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const _wrap = useRef();
  const _container = useRef();

  const next = () => {
    _container.current.scrollBy({
      top: 0,
      left: (active + 1) * screenWidth,
      behavior: "smooth",
    });
  };

  const prev = () => {
    _container.current.scrollBy({
      top: 0,
      left: (active - 1) * screenWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (_container.current) {
      setScreenWidth((30 * _container.current.offsetWidth) / 100 + 19);

      let isDragging = false;
      let startPosition = 0;
      let scrollLeftStartPosition = 0;
      let distance = 0;

      const mouseDown = (e) => {
        isDragging = true;
        startPosition = e.clientX;
        scrollLeftStartPosition = _container.current.scrollLeft;
      };

      const mouseUp = () => {
        isDragging = false;
      };

      const mouseMove = (e) => {
        if (!isDragging) return;

        distance = (e.clientX - startPosition) * 1.5;
        _container.current.scrollLeft = scrollLeftStartPosition - distance;
      };

      _container.current.addEventListener("mousedown", mouseDown);

      document.addEventListener("mouseup", mouseUp);

      document.addEventListener("mousemove", mouseMove);

      return () => {
        _container.current.removeEventListener("mousedown", mouseDown);
        document.removeEventListener("mouseup", mouseUp);
        document.removeEventListener("mousedown", mouseDown);
      };
    }
  }, [_container]);

  useEffect(() => {
    if (_wrap.current && screenWidth) {
      const scrolling = (e) => {
        setActive(
          Math.floor(
            e.currentTarget.scrollLeft / data.variables.benefits.length
          )
        );
      };

      _wrap.current.addEventListener("scroll", scrolling);

      return () => {
        _wrap.current.removeEventListener("scroll", scrolling);
      };
    }
  }, [_wrap, screenWidth]);

  return (
    <Fragment>
      <Helmet>
        <title>{data.course.name}</title>
        <meta name="description" content={data.course.short_desc} />
        <meta property="og:title" content={data.course.name} />
        <meta property="og:description" content={data.course.short_desc} />
        <meta property="og:image" content={data.course.banner} />
        <meta property="og:url" content={data.url} />
      </Helmet>
      <div
        className="w-screen h-screen flex flex-col justify-center px-8 relative"
        style={{ backgroundColor: data.variables.base_color }}
      >
        <img
          src={data.variables.logo}
          className="h-20 w-auto mx-auto mb-8 -mt-20"
          alt="Logo"
          title="Logo"
        />
        <h1 className="font-poppins text-2xl lg:text-4xl text-white font-bold text-center w-full lg:w-2/3 mx-auto">
          {data.variables.hero_title}
        </h1>
        <p className="text-gray-200 text-center w-full lg:w-2/3 mx-auto text-base mt-3">
          {data.variables.hero_description}
        </p>
        <div className="w-52 mt-12 mx-auto">
          <Button
            href={
              "https://app.gurupro.id/main/ecourse/course-detail/" +
              data.course.id
            }
            style={{ backgroundColor: data.variables.secondary_color }}
            title={"Gabung Kursus " + data.course.name}
          />
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="p-3 text-gray-400 hover:text-gray-200 flex flex-col justify-center items-center">
            <span className="text-sm mb-2">SCROLL</span>
            <CgChevronDoubleDown className="text-3xl animate-bounce" />
          </div>
        </div>
      </div>
      <Container
        containerClassName="py-12 lg:py-20"
        className="flex flex-col lg:flex-row justify-center items-start space-x-0 lg:space-x-8 space-y-4 lg:space-y-0"
      >
        <img
          src={data.course.banner}
          className="w-full lg:w-1/3 h-auto rounded"
          alt={data.course.name}
          title={data.course.name}
        />
        <div className="flex-1 prose text-justify">
          <p>{data.course.short_desc}</p>
        </div>
      </Container>
      <Container
        containerClassName="py-12 lg:pt-20 bg-gray-200"
        className="bg-white rounded p-5 lg:p-8 lg:py-10"
      >
        <div className="flex items-center justify-between">
          <h2 className="flex-1 font-poppins font-bold text-lg lg:text-2xl text-gray-800">
            Apa yang akan Anda dapatkan
          </h2>
          <div className="flex justify-between items-center space-x-3">
            <button
              type="button"
              onClick={() => prev()}
              className="rounded border border-gray-600 text-gray-700 text-base lg:text-xl w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center"
            >
              <CgChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => next()}
              className="rounded border border-gray-600 text-gray-700 text-base lg:text-xl w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center"
            >
              <CgChevronRight />
            </button>
          </div>
        </div>
        <div
          className="w-full overflow-x-auto no-scrollbar cursor-pointer"
          ref={_container}
        >
          <ul
            className="flex items-stretch justify-start space-x-5 mt-8"
            ref={_wrap}
          >
            {data.variables.benefits.map((item, index) => (
              <CardSlideList key={`${index}`} title={item.title}>
                {item.description}
              </CardSlideList>
            ))}
          </ul>
        </div>
      </Container>
      <Container
        containerClassName="pt-0 pb-12 lg:pb-20 bg-gray-200"
        className="bg-white rounded p-5 lg:p-8 lg:py-10"
      >
        <div
          className="prose max-w-full text-justify"
          dangerouslySetInnerHTML={{ __html: data.course.description }}
        />
      </Container>
      <Container containerClassName="py-12 lg:py-20 bg-white">
        <h3 className="text-center font-poppins text-lg lg:text-2xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions (FAQ)
        </h3>
        <div className="w-full lg:w-2/3 mx-auto">
          {data.variables.faqs.map((item, index) => (
            <QuestionList title={item.question} key={`${index}`}>
              {item.answer}
            </QuestionList>
          ))}
        </div>
      </Container>
      <Container
        containerClassName="py-12"
        containerProps={{ style: { backgroundColor: "#2D4356" } }}
        className="flex flex-col items-center justify-center h-40 space-y-5"
      >
        <h4 className="text-2xl text-white font-poppins font-bold text-center">
          {data.variables.join_text}
        </h4>
        <Button
          href={
            "https://app.gurupro.id/main/ecourse/course-detail/" +
            data.course.id
          }
          style={{ backgroundColor: data.variables.secondary_color }}
          title={"Gabung Kursus " + data.course.name}
        />
      </Container>
      <Container containerClassName="py-12 bg-white">
        <img
          src="https://www.gurupro.id/img/gurupro/GuruPRObiru.png"
          className="h-16 lg:h-20 w-auto mb-2"
          title="Logo GuruPRO"
          alt="Logo GuruPRO"
        />
        <div className="prose prose-sm">
          JL TB Simatupang Kav 1, <br />
          RT.3/RW.3, Kel. Cilandak Timur <br />
          Kec. Ps. Minggu, Kota Jakarta Selatan <br />
          DKI Jakarta
        </div>
      </Container>
      <Container
        containerClassName="py-5 border-t"
        className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-5 space-y-3 lg:space-y-0"
      >
        <div className="flex-1 text-center lg:text-left">
          ©2023 ICT PT. Desa Tech Nusantara, All Rights Reserved
        </div>
        <div className="flex justify-end items-center space-x-3">
          <a
            title="Facebook GuruPRO"
            href="https://www.facebook.com/thegurupro.id"
            className="h-8 w-8 bg-gray-600 hover:bg-gray-800 text-white flex justify-center items-center rounded-full"
          >
            <CgFacebook />
          </a>
          <a
            title="Instagram GuruPRO"
            href="https://www.instagram.com/gurupro.id"
            className="h-8 w-8 bg-gray-600 hover:bg-gray-800 text-white flex justify-center items-center rounded-full"
          >
            <CgInstagram />
          </a>
          <a
            title="Youtube GuruPRO"
            href="https://www.youtube.com/@gurupro_id"
            className="h-8 w-8 bg-gray-600 hover:bg-gray-800 text-white flex justify-center items-center rounded-full"
          >
            <CgYoutube />
          </a>
        </div>
      </Container>
    </Fragment>
  );
}
