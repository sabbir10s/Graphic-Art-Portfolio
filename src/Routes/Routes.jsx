import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import NotFound from "../Shared/NotFound/NotFound";
import ProjectDetails from "../Pages/Project/ProjectDetails";

export const router = createBrowserRouter([
  // Main Layout for Home and general pages
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // 👈 "/" will load Home
        element: <Home />,
      },
    ],
  },
  // Separate route for project details (Not inside Home's Layout)
  {
    path: "/:projectID", // 👈 Better structured path
    element: <Layout />, // 👈 Uses same layout (or a different one if needed)
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ProjectDetails />,
      },
    ],
  },
]);
