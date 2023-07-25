import App from "./App";

const routes = [
  {
    path: "/",
    loader: ({ context }) => {
      return { ...context.data, url: context.url };
    },
    Component: App,
  },
];

export default routes;
