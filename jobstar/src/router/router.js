import Home from "../views/Home";
import Companies from "../views/Companies";
import AddJob from "../views/AddJob";
import RegisterAdmin from "../views/RegisterAdmin";
import Login from "../views/Login";
import EditJob from "../views/EditJob";
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./Layout";

//const router
const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: () => {
      if(!localStorage.getItem("access_token")) {
        return redirect("/login")
      } else {
        return null
      }
    },
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
      {
        path: "/registerAdmin",
        element: <RegisterAdmin />,
      },
      {
        path: "/editJob/:id",
        element: <EditJob />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if(localStorage.getItem("access_token")) {
        return redirect("/")
      } else {
        return null
      }
    }
  },
]);

export default router;
