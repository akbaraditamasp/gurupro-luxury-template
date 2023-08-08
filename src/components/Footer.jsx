import { Fragment } from "react";
import Container from "./Container";
import * as icon from "react-icons/ri";
import { useRouteLoaderData } from "react-router-dom";

export default function Footer() {
  const rootData = useRouteLoaderData("root");
  return (
    <Fragment>
      <Container containerClassName="py-20 bg-purple-300 relative mt-12">
        <div className="bg-purple-300 h-20 transform rotate-2 absolute -top-10 -left-10 -right-10 border-t-4 border-purple-400" />
        <div className="bg-purple-300 h-20 transform rotate-2 absolute -bottom-10 -left-10 -right-10 border-b-4 border-purple-400" />
        <div className="font-bold text-gray-800 font-montserrat text-4xl text-center">
          "{rootData.variables?.quotes}"
        </div>
        <div className="flex justify-center items-center space-x-2 mt-5">
          {rootData.variables?.socials?.map((item, index) => {
            const SocialIcon =
              icon[
                item.name === "Facebook"
                  ? "RiFacebookFill"
                  : item.name === "Instagram"
                  ? "RiInstagramFill"
                  : item.name === "Youtube"
                  ? "RiYoutubeFill"
                  : "RiTwitterFill"
              ];
            return (
              <a
                key={`${index}`}
                href={item.url}
                title={item.name}
                className="w-10 h-10 rounded-full bg-purple-400 border border-purple-500 flex justify-center items-center text-lg text-purple-800 hover:border-purple-600 hover:bg-purple-500 hover:text-white"
              >
                <SocialIcon />
              </a>
            );
          })}
        </div>
      </Container>
      <Container containerClassName="py-12 text-center text-gray-800 mt-10">
        &copy;2023 ICT PT. Desa Tech Nusantara, All Rights Reserved
      </Container>
    </Fragment>
  );
}
