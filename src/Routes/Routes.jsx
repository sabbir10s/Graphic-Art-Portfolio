import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import ProjectDetails from "../Components/Projects/ProjectDetails";
// import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:projectID",
        element: <ProjectDetails />,
      },
    ],
  },
]);
