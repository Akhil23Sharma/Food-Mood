import { lazy } from "react";
// import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

//implementing lazyloading for Grocery component   //do not import Grocery from "./components/Grocery"; like this

const Grocery = lazy(() => import("./components/Grocery"));

const Footer = () => {
  return (
    <>
      <div className="footer-class">
        <div className="footer-content">
          <h1>For better experience,download the Meow app now</h1>
          <div className="footer-logo-card"></div>
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

//defining my routes

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/grocery", element: <Grocery /> },
    ],
  },
]);

const App = () => <RouterProvider router={appRouter} />;

export default App;
