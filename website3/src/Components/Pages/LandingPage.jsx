import React from "react";
import NavBar from "../NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../Contact/Contact";
import MainTabUK from "../Abroad/MainTabUK";

const LandingPage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
        </div>
      ),
    },

    {
      path: "/About us",
      element: (
        <div>
          <NavBar />
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
    </div>
  );
};

export default LandingPage;
