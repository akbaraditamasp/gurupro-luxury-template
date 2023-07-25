import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import routes from "./routes";
import createFetchRequest from "./request";
import { HelmetProvider } from "react-helmet-async";

export const helmetContext = {};

export async function render(req, data) {
  const fetchRequest = createFetchRequest(req);
  const handler = createStaticHandler(routes);
  const context = await handler.query(fetchRequest, {
    requestContext: {
      data,
    },
  });
  const router = createStaticRouter(handler.dataRoutes, context);

  return renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouterProvider router={router} context={context} />
    </HelmetProvider>
  );
}
