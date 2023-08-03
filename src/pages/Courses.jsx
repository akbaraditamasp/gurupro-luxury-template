import { Fragment } from "react";
import CardCourse from "../components/CardCourse";
import Container from "../components/Container";
import { useRouteLoaderData } from "react-router-dom";

export default function Courses() {
  const rootData = useRouteLoaderData("root");

  return (
    <Fragment>
      <Container
        containerClassName="bg-gradient-to-br from-blue-200 to-purple-400 pt-20"
        className="relative flex flex-col justify-center h-64"
      >
        <div className="font-montserrat font-bold text-gray-800 mb-1 text-4xl w-full lg:w-1/2">
          Kursus Saya
        </div>
        <div className="text-gray-700 text-lg mb-10 w-full lg:w-1/2">
          Ikuti kursus terbaik dari DevOps and Back-End Developer Scholarship
          Program
        </div>
      </Container>
      <Container className="py-20 bg-white">
        <div className="grid grid-flow-row grid-cols-4 gap-5">
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
    </Fragment>
  );
}
