import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Page from "./pages/Page";
import Game from "./pages/Game";
import Instruction from "./pages/Instruction";
import Collection from "./pages/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page",
    element: <Page />,
    children: [
      {
        path: "/page/game",
        element: <Game />,
      },
      {
        path: "/page/instruction",
        element: <Instruction />,
      },
      {
        path: "/page/collection",
        element: <Collection />,
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
