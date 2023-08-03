import { client } from "./client";
import Blog from "./pages/Blog";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Post from "./pages/Post";
import { decodeLowerCaseToNumber, slugify } from "./slugify";

const routes = [
  {
    path: "/",
    id: "root",
    loader: async () => {
      let data = null;

      try {
        data = await client
          .get("/micro", {
            params: {
              subdomain: "ngin-academy.gurupro.id",
            },
          })
          .then((response) => response.data);
      } catch (e) {
        throw new Response("Not Found", {
          status: 404,
        });
      }

      return data;
    },
    element: <Layout />,
    children: [
      {
        path: "",
        id: "root/home",
        element: <Home />,
        index: true,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "course/:slug",
        loader: async ({ params }) => {
          const slugs = params.slug.split("-");
          const id = decodeLowerCaseToNumber(slugs.pop());
          const slug = slugs.join("-");
          let data = {};

          try {
            data = await client
              .get("/course/" + id)
              .then((response) => response.data);
          } catch (e) {
            throw new Response("Not Found", { status: 404 });
          }

          if (slugify(data.name) !== slug) {
            throw new Response("Not Found", { status: 404 });
          }

          return data;
        },
        element: <CourseDetail />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
];

export default routes;
