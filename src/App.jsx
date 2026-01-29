import { useState } from "react";

import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home/Home";
import BlogPage from "./components/BlogPage/BlogPage";
import ArticleDetails from "./components/BlogPage/ArticleDetails";
import About from "./components/about/About";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogPage />,
          },
          {
            path: ":title",
            element: <ArticleDetails />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
