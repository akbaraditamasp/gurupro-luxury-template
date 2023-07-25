import { Fragment, useState } from "react";
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

const get = [
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
  },
  {
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat standar industri setelah menyelesaikan kelas ini.",
  },
];

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <Fragment>
      <div
        className="w-screen h-screen flex flex-col justify-center px-8 relative"
        style={{ backgroundColor: "#2D4356" }}
      >
        <img
          src="https://aws.dicoding.com/images/aws/aws-training-certification-final.svg"
          className="h-20 w-auto mx-auto mb-8 -mt-20"
        />
        <div className="font-poppins text-2xl lg:text-4xl text-white font-bold text-center w-full lg:w-1/2 mx-auto">
          DevOps and Back-End Developer Scholarship Program
        </div>
        <div className="text-gray-200 text-center w-full lg:w-1/2mx-auto text-base lg:text-xl mt-3">
          Raih Beasiswa Menjadi DevOps dan Back-End Developer
        </div>
        <div className="w-52 mt-12 mx-auto">
          <Button to="/" style={{ backgroundColor: "#F29727" }} />
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
          src="https://picsum.photos/800/450"
          className="w-full lg:w-1/3 h-auto rounded"
        />
        <div className="flex-1 prose text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pellentesque turpis dapibus justo tempus vehicula. Nunc elementum,
            nisi bibendum feugiat condimentum, dui lectus ultrices odio, non
            malesuada ante massa id odio. Nunc sed nulla et diam cursus
            pellentesque eget in nisl. Pellentesque non elit risus. Nullam leo
            justo, mattis ac suscipit eu, commodo ut orci. Nunc id erat vitae
            augue elementum porttitor quis non justo. Phasellus nec magna in
            nisl tempor cursus egestas sed nunc
          </p>
        </div>
      </Container>
      <Container
        containerClassName="py-12 lg:pt-20 bg-gray-200"
        className="bg-white rounded p-5 lg:p-8 lg:py-10"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 font-poppins font-bold text-lg lg:text-2xl text-gray-800">
            Apa yang akan Anda dapatkan
          </div>
          <div className="flex justify-between items-center space-x-3">
            <button
              type="button"
              onClick={() =>
                setActive((value) => (value > 0 ? value - 1 : value))
              }
              className="rounded border border-gray-600 text-gray-700 text-base lg:text-xl w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center"
            >
              <CgChevronLeft />
            </button>
            <button
              type="button"
              onClick={() =>
                setActive((value) => (value < get.length ? value + 1 : value))
              }
              className="rounded border border-gray-600 text-gray-700 text-base lg:text-xl w-6 h-6 lg:w-10 lg:h-10 flex justify-center items-center"
            >
              <CgChevronRight />
            </button>
          </div>
        </div>
        <div className="w-full overflow-x-hidden">
          <div
            className="flex items-stretch justify-start space-x-5 mt-8 transition-all duration-500"
            style={{
              transform: `translateX(calc((0px - (${
                screen.width >= 1024 ? "30" : "85"
              }% + 19px)) * ${active}))`,
            }}
          >
            {get.map((item, index) => (
              <CardSlideList key={`${index}`} title={item.title}>
                {item.description}
              </CardSlideList>
            ))}
          </div>
        </div>
      </Container>
      <Container
        containerClassName="pt-0 pb-12 lg:pb-20 bg-gray-200"
        className="bg-white rounded p-5 lg:p-8 lg:py-10 prose max-w-full text-justify"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec placerat nunc, vehicula viverra diam. Mauris eu neque congue,
          dictum ex sit amet, tempus metus. Duis dapibus semper libero, quis
          placerat libero luctus a. Vivamus sed leo vel nulla lacinia pharetra
          et nec dui. Morbi sagittis volutpat orci, ut aliquam dolor aliquet
          vel. Vestibulum ac orci gravida, luctus nisl a, laoreet augue.
          Vestibulum fringilla semper lorem, in vehicula dui auctor id. Vivamus
          felis erat, porta sit amet ultricies ac, pulvinar nec velit. Ut non
          imperdiet dolor, eu blandit ante. Duis risus felis, dapibus id libero
          eu, viverra interdum dui. Curabitur fermentum ex est, vel consequat
          orci molestie quis. Donec malesuada id massa id consequat. Proin at
          quam at orci feugiat feugiat id sed tellus. Etiam eu sapien vitae
          turpis tincidunt faucibus. Curabitur quam magna, lacinia vestibulum
          mauris id, bibendum pulvinar nunc.
        </p>
        <p>
          Proin ornare, tellus ac fermentum tempus, urna leo rhoncus enim, eu
          pellentesque risus est ut tortor. Ut aliquet congue ligula. In
          pretium, lorem nec malesuada fringilla, dui odio euismod ex, nec
          interdum enim dui vel erat. Nullam placerat condimentum lorem nec
          sodales. Praesent et metus risus. Mauris dapibus diam sed ultricies
          euismod. Morbi pellentesque feugiat mauris at tempor. Vestibulum
          suscipit mollis porttitor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin bibendum tellus nec pretium eleifend. Etiam
          quis tempus nibh.
        </p>
        <p>
          Morbi id nunc eget quam suscipit tempus sit amet eu diam. Quisque sed
          justo turpis. Praesent congue elementum nisi vel efficitur. Nam
          finibus, tortor non efficitur pellentesque, augue elit egestas dolor,
          vitae auctor risus nulla in odio. Donec consequat leo ac luctus
          consectetur. Integer diam mi, varius id ligula fringilla, faucibus
          varius purus. Fusce consequat ullamcorper ullamcorper. Vestibulum
          pellentesque ligula quis tortor elementum accumsan.
        </p>
      </Container>
      <Container containerClassName="py-12 lg:py-20 bg-white">
        <div className="text-center font-poppins text-lg lg:text-2xl font-bold text-gray-800 mb-8">
          Frequently Asked Questions (FAQ)
        </div>
        <div className="w-full lg:w-2/3 mx-auto">
          <QuestionList title="Lorem ipsum?">
            Morbi id nunc eget quam suscipit tempus sit amet eu diam. Quisque
            sed justo turpis. Praesent congue elementum nisi vel efficitur. Nam
            finibus, tortor non efficitur pellentesque, augue elit egestas
            dolor, vitae auctor risus nulla in odio. Donec consequat leo ac
            luctus consectetur. Integer diam mi, varius id ligula fringilla,
            faucibus varius purus. Fusce consequat ullamcorper ullamcorper.
            Vestibulum pellentesque ligula quis tortor elementum accumsan.
          </QuestionList>
          <QuestionList title="Lorem ipsum?">
            Morbi id nunc eget quam suscipit tempus sit amet eu diam. Quisque
            sed justo turpis. Praesent congue elementum nisi vel efficitur. Nam
            finibus, tortor non efficitur pellentesque, augue elit egestas
            dolor, vitae auctor risus nulla in odio. Donec consequat leo ac
            luctus consectetur. Integer diam mi, varius id ligula fringilla,
            faucibus varius purus. Fusce consequat ullamcorper ullamcorper.
            Vestibulum pellentesque ligula quis tortor elementum accumsan.
          </QuestionList>
          <QuestionList title="Lorem ipsum?">
            Morbi id nunc eget quam suscipit tempus sit amet eu diam. Quisque
            sed justo turpis. Praesent congue elementum nisi vel efficitur. Nam
            finibus, tortor non efficitur pellentesque, augue elit egestas
            dolor, vitae auctor risus nulla in odio. Donec consequat leo ac
            luctus consectetur. Integer diam mi, varius id ligula fringilla,
            faucibus varius purus. Fusce consequat ullamcorper ullamcorper.
            Vestibulum pellentesque ligula quis tortor elementum accumsan.
          </QuestionList>
        </div>
      </Container>
      <Container
        containerClassName="py-12"
        containerProps={{ style: { backgroundColor: "#2D4356" } }}
        className="flex flex-col items-center justify-center h-40 space-y-5"
      >
        <div className="text-2xl text-white font-poppins font-bold text-center">
          Ayo segera bergabung bersama kami!
        </div>
        <Button to="/" style={{ backgroundColor: "#F29727" }} />
      </Container>
      <Container containerClassName="py-12 bg-white">
        <img
          src="https://www.gurupro.id/img/gurupro/GuruPRObiru.png"
          className="h-16 lg:h-20 w-auto mb-2"
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
            href="https://www.facebook.com/thegurupro.id"
            className="h-8 w-8 bg-gray-600 hover:bg-gray-800 text-white flex justify-center items-center rounded-full"
          >
            <CgFacebook />
          </a>
          <a
            href="https://www.instagram.com/gurupro.id"
            className="h-8 w-8 bg-gray-600 hover:bg-gray-800 text-white flex justify-center items-center rounded-full"
          >
            <CgInstagram />
          </a>
          <a
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
