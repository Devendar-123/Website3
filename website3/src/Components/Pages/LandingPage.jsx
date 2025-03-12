import React from "react";
import NavBar from "../NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../Contact/Contact";
import MainTabUK from "../Abroad/MainTabUK";
import Home from "../Home/Home";
import About from "../About-Us/About";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import Test from "../Test/Test";
import Counselling from "../Counselling/Counselling";
import ForeignExchange from "../ForeignExchange/ForeignExchange";
import Visa from "../Visa/Visa";
import Admission from "../Admission/Admission";

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
      path: "/Other Services/test",
      element: (
        <div>
          <NavBar />
          <Test/>
        </div>
      ),
    },
    {
      path: "/Other Services/Counselling",
      element: (
        <div>
          <NavBar />
          <Counselling/>
        </div>
      ),
    },
    
    {
      path: "/Other Services/Admission",
      element: (
        <div>
          <NavBar />
          <Admission/>
        </div>
      ),
    },
    {
      path: "/Other Services/Visa",
      element: (
        <div>
          <NavBar />
          <Visa/>
        </div>
      ),
    },
    {
      path: "/Other Services/ForeignExchange",
      element: (
        <div>
          <NavBar />
          <ForeignExchange/>
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
