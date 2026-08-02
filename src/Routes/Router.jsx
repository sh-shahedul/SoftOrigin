import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";


 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
   
    children: [
        {
            index:true,
            element: <Home></Home>,
            
        }
    ]
  },
]);