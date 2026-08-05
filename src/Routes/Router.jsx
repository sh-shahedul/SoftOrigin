import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Project from "../Pages/Project/Project";


 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
   
    children: [
        {
            index:true,
            element: <Home></Home>,
            
        },
        {
            path: "about",
            element: <About></About>,
        },
        {
            path: "services",
            element: <Services></Services>,
        },
        {
            path:'project',
            element:<Project></Project>
        }
    ]
  },
]);
