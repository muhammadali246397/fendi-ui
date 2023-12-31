import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../main/Main";
import Home from "../../pages/home/home/Home";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
  ])

  export default router;