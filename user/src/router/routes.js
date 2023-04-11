import { createBrowserRouter } from "react-router-dom";
import Home from '../views/Home.js';
import JobDetail from '../views/JobDetail.js';
import Companies from '../views/Companies.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/job/:id",
    element: <JobDetail />,
  },
  {
    path: "/companies",
    element: <Companies />,
  },
]);

export default router;
