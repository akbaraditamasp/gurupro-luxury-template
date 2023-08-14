import { Fragment } from "react";
import Container from "../components/Container";
import { useLoaderData } from "react-router-dom";
import moment from "moment/moment";

export default function Post() {
  const data = useLoaderData();

  return (
    <Fragment>
      <Container
        containerClassName="pt-[7.5rem] lg:pt-[10rem] pb-10 lg:pb-20"
        className="relative rounded border border-gray-400 p-8 w-full lg:w-[900px] xl:w-[900px]"
      >
        <div className="mb-8">
          <div className="font-bold text-2xl font-montserrat text-gray-800">
            {data.title}
          </div>
          <div className="mt-1">
            diposting pada {moment(data.created_at).format("DD MMMM YYYY")}
          </div>
        </div>
        <img
          src={data.thumbnail}
          className="w-full h-auto rounded mb-5"
          alt={data.title}
          title={data.title}
        />
        <div
          className="prose max-w-full text-justify"
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      </Container>
    </Fragment>
  );
}
