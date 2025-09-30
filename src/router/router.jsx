import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Skills from "../components/Skills";
import Projects from "../pages/Projects";
import Contact from "../components/Contact";
import AboutMe from "../pages/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {path: "/about",element:<AboutMe />},
      {path: "/skills",element:<Skills />},
    {path:"/projects", element: <Projects />},
    {path:"/contact", element: <Contact/>}
     
    ],
  },
]);

export default router;