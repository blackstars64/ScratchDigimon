import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Page from "./pages/Page";
import Game from "./pages/Game";
import Instruction from "./pages/Instruction";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import { ScratchPercentProvider } from "./context/ScratchPercentContext";

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
        path: "/home",
        element: <Home />,
      },
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
  {
    path: "/adminPanel",
    element: <AdminPanel />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ScratchPercentProvider>
        <RouterProvider router={router} />
      </ScratchPercentProvider>
    </AuthProvider>
  </React.StrictMode>
);
