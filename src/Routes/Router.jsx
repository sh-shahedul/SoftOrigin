import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";


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
        }
    ]
  },
]);
