import { Fragment } from "react";
import { useRouteLoaderData } from "react-router-dom";
import CardContent from "../components/CardContent";
import Container from "../components/Container";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const rootData = useRouteLoaderData("root");
  return (
    <Fragment>
      <Helmet>
        <title>Blog Saya</title>
        <meta
          name="description"
          content={`Wawasan terbaru dari ${rootData.variables?.title}`}
        />
        <meta property="og:title" content={"Blog Saya"} />
        <meta
          property="og:description"
          content={`Wawasan terbaru dari ${rootData.variables?.title}`}
        />
        <meta property="og:image" content={rootData.variables?.logo} />
        <meta property="og:url" content={rootData.url} />
      </Helmet>
      <Container
        containerClassName="bg-gradient-to-br from-blue-200 to-purple-400 pt-28"
        className="relative flex flex-col justify-center h-52"
      >
        <div className="font-montserrat font-bold text-gray-800 mb-1 text-2xl lg:text-4xl w-full lg:w-1/2">
          Blog Saya
        </div>
        <div className="text-gray-700 text-lg mb-10 w-full lg:w-1/2">
          Wawasan terbaru dari {rootData.variables?.title}
        </div>
      </Container>
      <Container className="py-12 lg:py-20 bg-white">
        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-5">
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
