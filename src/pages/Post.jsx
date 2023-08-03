import { Fragment } from "react";
import Container from "../components/Container";

export default function Post() {
  return (
    <Fragment>
      <Container
        containerClassName="pt-[10rem] pb-20"
        className="relative rounded border border-gray-400 p-8 w-full lg:w-[900px] xl:w-[900px]"
      >
        <div className="mb-8">
          <div className="font-bold text-2xl font-montserrat text-gray-800">
            Tutorial Membangun Candi Dalam 1 Malam
          </div>
          <div className="mt-1">diposting pada 19 Juli 2023</div>
        </div>
        <div className="prose max-w-full text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
            mauris nec odio sodales finibus sed fringilla mauris. Duis at cursus
            nisi, quis rutrum arcu. Vivamus euismod ut leo in malesuada. In vel
            diam eleifend, molestie sapien et, euismod quam. Ut pharetra id est
            vitae euismod. Pellentesque nec mi velit. Aenean iaculis tortor
            tortor, non blandit elit ultrices id. Sed tempus tempus placerat.
          </p>
          <p>
            Sed ac euismod sem, at finibus dolor. Phasellus at interdum metus.
            Donec lacinia ipsum a ipsum accumsan, et bibendum libero
            pellentesque. Vivamus at mollis orci. Donec fringilla venenatis
            lacus, quis ullamcorper arcu cursus in. Nunc rhoncus, ipsum vel
            auctor lacinia, mi enim iaculis ex, eu posuere justo eros in lacus.
            Pellentesque ac imperdiet ex. Mauris molestie, metus fringilla
            eleifend congue, dui sapien rutrum sapien, quis porttitor metus ante
            in lectus. Morbi nec tristique leo. Aenean id quam et urna vehicula
            vehicula. Donec nisl magna, rutrum in mi eget, mattis tempor augue.
            Sed bibendum ligula turpis, nec volutpat odio laoreet ullamcorper.
            Duis leo sem, luctus sed justo id, tempus elementum nibh.
            Pellentesque hendrerit, mi in mollis bibendum, leo ante mollis
            tellus, sit amet faucibus elit purus a nunc. Vestibulum porttitor
            vulputate odio, in blandit sapien placerat et.
          </p>
          <p>
            Ut non auctor ante. Nam venenatis eu ipsum et viverra. Vivamus eget
            mattis ante. Fusce vestibulum at libero vitae condimentum. Nulla
            facilisi. In id hendrerit nunc, in malesuada arcu. Cras hendrerit
            commodo turpis, ut convallis quam pharetra nec. Sed sodales enim non
            tortor rhoncus, eget lacinia nibh fermentum. Phasellus lacinia
            viverra eros, a porta lacus condimentum sit amet. Phasellus eget
            arcu vel leo sodales condimentum id id dolor.
          </p>
          <p>
            Proin felis elit, malesuada nec tempus eu, rhoncus eget dolor. Duis
            tincidunt pellentesque viverra. Aliquam eget mauris eu augue lacinia
            accumsan. Suspendisse nec pellentesque justo, at vehicula dui.
            Aliquam a dui eget nibh tincidunt tincidunt vel a nunc. Maecenas
            hendrerit mattis arcu, eu euismod urna aliquet a. Mauris eu quam
            lectus.
          </p>
          <p>
            Suspendisse pretium tortor vel eros pulvinar, malesuada tincidunt
            neque laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus sed pellentesque neque. Sed eget sagittis nunc, ut
            pharetra ipsum. Duis pellentesque vitae dui vitae condimentum. Donec
            convallis turpis eget dolor lobortis lacinia. Quisque tempus ligula
            quam, non bibendum nibh convallis sed. Suspendisse quis enim cursus,
            porta tellus nec, vehicula nunc. Suspendisse eu sodales orci. Duis
            varius tincidunt aliquam. Aenean et dictum magna, at pretium erat.
          </p>
        </div>
      </Container>
    </Fragment>
  );
}
