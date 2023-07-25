import App from "./App";

const routes = [
  {
    path: "/",
    loader: ({ context }) => {
      return context.data;
    },
    Component: App,
  },
];

export default routes;
