import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Page from "./pages/Page";
import Game from "./pages/Game";
import Instruction from "./pages/Instruction";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/instruction",
        element: <Instruction />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
