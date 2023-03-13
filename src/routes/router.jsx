import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import FicheLogement from "../Pages/FicheLogement";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const HeaderAndFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

/* Routes */

export const router = createBrowserRouter([
  {
    element: <HeaderAndFooterLayout />,
    errorElement: <Error />, /* Page 404 */
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/logement",
        element: <FicheLogement />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
    ],
  },
]);
