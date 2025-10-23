import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Layout } from "./Layout";
import { QRCodeGenerator } from "./QRCodeGenerator";
import { Navigation } from "./Navigation";
import { QRCodeReader } from "./QRCodeReader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
    path: "/",
    element: <Navigation/>,
  },
  {
    path: "/generate",
    element: <QRCodeGenerator/>,
  },
  {
    path: "/scan",
    element: <QRCodeReader/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
