//Layout
import LayoutAdmin from "../Layouts/LayoutAdmin";
import LayoutBasic from "../Layouts/LayoutBasic";

//Admin Pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn";

// User Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

// Page de Error 404
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/login",
        component: AdminSignIn,
        exact: true,
      },
      {
        path: "*",
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "*",
        component: Error404,
      },
    ],
  },
];

export default routes;
