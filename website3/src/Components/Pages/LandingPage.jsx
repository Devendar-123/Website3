import React from "react";
import NavBar from "../NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../Contact/Contact";
import MainTabUK from "../Abroad/MainTabUK";
import Home from "../Home/Home";
import About from "../About-Us/About";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
const LandingPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <Home/>
        </div>
      ),
    },

    {
      path: "/About-Us",
      element: (
        <div>
          <NavBar />
          <About/>
        </div>
      ),
    },
    {
      path: "/Study Abroad",
      element: (
        <div>
          <NavBar />
          <MainTabUK/>
        </div>
      ),
    },
    {
      path: "/Other Services",
      element: (
        <div>
          <NavBar />
        </div>
      ),
    },
    {
      path: "/Gallery",
      element: (
        <div>
          <NavBar />
          <Gallery/>
        </div>
      ),
    },
    {
      path: "/Success Stories",
      element: (
        <div>
          <NavBar />
        </div>
      ),
    },
    {
      path: "/Contact",
      element: (
        <div>
          <NavBar />
          <Contact/>
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
