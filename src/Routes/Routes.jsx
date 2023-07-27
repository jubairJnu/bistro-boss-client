import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homes/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import Secter from "../pages/Secret/Secter";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import Allusers from "../pages/Dashboard/Allusers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'menu',
        element:<Menu></Menu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'secret',
        element:<PrivateRouter><Secter></Secter></PrivateRouter>
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allusers',
        element:<Allusers></Allusers>
      }
    ]
  }
]);
