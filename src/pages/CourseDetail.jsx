import { Link, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Container from "../components/Container";
import { RiStarFill } from "react-icons/ri";
import { CgArrowRight } from "react-icons/cg";
import { Fragment } from "react";
import HeadTitle from "../components/HeadTitle";
import { NumericFormat } from "react-number-format";
import { Helmet } from "react-helmet-async";

export default function CourseDetail() {
  const data = useLoaderData();
  const rootData = useRouteLoaderData("root");

  return (
    <Fragment>
      <Helmet>
        <title>{data.name}</title>
        <meta name="description" content={data.short_desc} />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.short_desc} />
        <meta property="og:image" content={data.banner} />
        <meta property="og:url" content={rootData.url} />
      </Helmet>
      <Container
        containerClassName="pt-[7.5rem] lg:pt-[10rem] pb-10 lg:pb-20 border-b border-gray-400 bg-gradient-to-br from-blue-100 to-purple-200"
        className="flex flex-col lg:flex-row justify-center space-y-5 lg:space-y-0 space-x-0 lg:space-x-8"
      >
        <img
          src={data.image}
          className="w-24 h-24 lg:w-64 lg:h-64 bg-white rounded object-cover"
        />
        <div className="flex-1 py-1">
          <div className="flex items-center justify-start space-x-2 mb-3">
            <RiStarFill className="text-xl text-yellow-500" />
            <span className="font-bold">{data.reviews_avg_star}</span>
          </div>
          <div className="font-bold text-2xl text-gray-800">{data.name}</div>
          <div className="flex items-center justify-start space-x-3">
            <NumericFormat
              className="font-bold text-purple-600 text-xl"
              value={
                data.discount
                  ? data.price - (data.discount / 100) * data.price
                  : data.price
              }
              prefix="Rp"
              thousandSeparator=","
              displayType="text"
            />
            {data.discount ? (
              <NumericFormat
                className="text-sm line-through"
                value={
                  data.discount
                    ? (data.discount / 100) * data.price
                    : data.price
                }
                prefix="Rp"
                thousandSeparator=","
                displayType="text"
              />
            ) : null}
          </div>
          <div className="my-5 prose max-w-full">{data.short_desc}</div>
          <a
            href={
              "https://app.gurupro.id/main/ecourse/course-detail/" + data.id
            }
            className="group border border-transparent hover:border-purple-800 p-1 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex w-44 justify-center items-center"
            to="/"
          >
            <span className="px-2 flex-1 text-center font-montserrat uppercase text-sm">
              Bergabung
            </span>
            <span className="w-8 h-8 rounded-full bg-white text-gray-800 group-hover:shadow-lg flex justify-center items-center">
              <CgArrowRight className="text-xl" />
            </span>
          </a>
        </div>
      </Container>
      <Container containerClassName="py-10 pb-20">
        <HeadTitle>Deskripsi</HeadTitle>
        <div
          className="prose max-w-full text-justify"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </Container>
    </Fragment>
  );
}
