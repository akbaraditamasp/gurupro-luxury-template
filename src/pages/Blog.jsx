import { Fragment } from "react";
import Container from "../components/Container";
import CardContent from "../components/CardContent";

export default function Blog() {
  return (
    <Fragment>
      <Container
        containerClassName="bg-gradient-to-br from-blue-200 to-purple-400 pt-20"
        className="relative flex flex-col justify-center h-64"
      >
        <div className="font-montserrat font-bold text-gray-800 mb-1 text-4xl w-full lg:w-1/2">
          Blog Saya
        </div>
        <div className="text-gray-700 text-lg mb-10 w-full lg:w-1/2">
          Wawasan terbaru dari DevOps and Back-End Developer Scholarship Program
        </div>
      </Container>
      <Container className="py-20 bg-white">
        <div className="grid grid-flow-row grid-cols-4 gap-5">
          <CardContent />
          <CardContent />
          <CardContent />
          <CardContent />
        </div>
      </Container>
    </Fragment>
  );
}
