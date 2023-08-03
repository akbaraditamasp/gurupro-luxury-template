import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </Fragment>
  );
}
