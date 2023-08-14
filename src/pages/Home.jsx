import { Fragment } from "react";
import { CgArrowRight } from "react-icons/cg";
import { Link, useRouteLoaderData } from "react-router-dom";
import CardContent from "../components/CardContent";
import Container from "../components/Container";
import HeadTitle from "../components/HeadTitle";
import CardCourse from "../components/CardCourse";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const rootData = useRouteLoaderData("root");

  return (
    <Fragment>
      <Helmet>
        <title>{rootData.variables?.title}</title>
        <meta name="description" content={rootData.variables?.subtitle} />
        <meta property="og:title" content={rootData.variables?.title} />
        <meta
          property="og:description"
          content={rootData.variables?.subtitle}
        />
        <meta property="og:image" content={rootData.variables?.logo} />
        <meta property="og:url" content={rootData.url} />
      </Helmet>
      <Container
        containerClassName="bg-gradient-to-br from-blue-200 to-purple-400 pt-56 lg:py-10 min-h-screen"
        className="relative flex flex-col items-center lg:items-start justify-start lg:justify-center h-auto lg:h-screen pb-20"
      >
        <img
          src={rootData.variables?.model}
          alt={
            rootData.user?.profile?.first_name +
            " " +
            rootData.user?.profile?.last_name
          }
          title={
            rootData.user?.profile?.first_name +
            " " +
            rootData.user?.profile?.last_name
          }
          className="w-[80%] h-auto lg:h-[90%] lg:w-auto absolute -bottom-5 right-auto left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-0"
        />
        <h1 className="font-montserrat font-bold text-gray-800 mb-1 text-2xl lg:text-4xl w-full lg:w-1/2 relative text-center lg:text-left">
          {rootData.variables?.title}
        </h1>
        <h2 className="text-gray-700 text-lg mb-10 w-full lg:w-1/2 text-center relative">
          {rootData.variables?.subtitle}
        </h2>
        <Link
          className="group border border-transparent hover:border-purple-800 p-1 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex w-52 justify-center items-center relative"
          to="/courses"
          title="Lihat Kelas"
        >
          <span className="px-2 flex-1 text-center font-montserrat uppercase">
            Lihat Kelas
          </span>
          <span className="w-12 h-12 rounded-full bg-white text-gray-800 group-hover:shadow-lg flex justify-center items-center">
            <CgArrowRight className="text-2xl" />
          </span>
        </Link>
      </Container>
      <Container
        containerClassName="py-20 bg-gray-200 relative"
        className="bg-white p-8 rounded"
      >
        <div className="bg-gray-200 h-20 transform -rotate-2 absolute -top-6 -left-10 -right-10 hidden lg:block" />
        <HeadTitle element="h3">Sedikit Tentang Saya</HeadTitle>
        <div
          className="prose max-w-full text-justify"
          dangerouslySetInnerHTML={{ __html: rootData.variables?.about }}
        />
      </Container>
      <Container className="py-20 bg-white">
        <HeadTitle element="h3">Kelas Saya</HeadTitle>
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-5">
          {rootData.user?.courses?.map((item, index) => (
            <CardCourse
              title={item.name}
              price={item.discounted_price}
              throughPrice={item.discount && item.price}
              image={item.banner}
              key={`${index}`}
              id={item.id}
            />
          ))}
        </div>
      </Container>
      <Container className="py-24 pt-0 bg-white">
        <HeadTitle element="h3">Artikel Terbaru</HeadTitle>
        <div className="grid grid-flow-row gird-cols-1 lg:grid-cols-4 gap-5">
          {rootData.user?.articles?.map((item, index) => (
            <CardContent
              title={item.title}
              description={item.body}
              image={item.thumbnail}
              id={item.id}
              key={`${index}`}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
}
