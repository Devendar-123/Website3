import React from "react";
import NavBar from "../NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../Contact/Contact";
import MainTabUK from "../Abroad/Uk/MainTabUK";
import Home from "../Home/Home";
import About from "../About-Us/About";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import Story from "../Stories/Story";
import Test from "../Test/Test";
import Counselling from "../Counselling/Counselling";
import ForeignExchange from "../ForeignExchange/ForeignExchange";
import Visa from "../Visa/Visa";
import Admission from "../Admission/Admission";
import France from "../Abroad/France/France";
import USA from "../Abroad/USA/USA";
import MainTabAus from "../Abroad/Australia/MainTabUK";
import MainTabGer from "../Abroad/Germany/MainTabUK";
import MainTabNew from "../Abroad/NewZeland/MainTabUK";
import MainTabCan from "../Abroad/Canada/MainTabUK";


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
        </div>
      ),
    },
    {
      path: "/Study Abroad/MainTabUK",
      element: (
        <div>
          <NavBar />
          <MainTabUK/>
        </div>
      ),
    },
    {
      path: "/Study Abroad/France",
      element: (
        <div>
          <NavBar />
          <France/>
      path: "/Study Abroad/MainTabAus",
      element: (
        <div>
          <NavBar />
          <MainTabAus/>
        </div>
      ),
    },
    {
      path: "/Study Abroad/USA",
      element: (
        <div>
          <NavBar />
          <USA/>
      path: "/Study Abroad/MainTabNew",
      element: (
        <div>
          <NavBar />
          <MainTabNew/>
        </div>
      ),
    },
    {
      path: "/Study Abroad/MainTabGer",
      element: (
        <div>
          <NavBar />
          <MainTabGer/>
        </div>
      ),
    },
    {
      path: "/Study Abroad/MainTabCan",
      element: (
        <div>
          <NavBar />
          <MainTabCan/>
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
      path: "/Success Stories/Test",
      element: (
        <div>
          <NavBar />
          <Story/>
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
