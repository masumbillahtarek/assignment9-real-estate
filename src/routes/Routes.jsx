
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateDetails from "../privateRoutes/EstateDetails";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
       path:"/register",
       element:<Register></Register>
        },
        {
          path:'/estate/:id',
          loader:()=>fetch('../../public/estate.json'),
          element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>
        }
    
    ]
  },
]);
export default router;