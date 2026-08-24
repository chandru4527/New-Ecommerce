import { createBrowserRouter } from "react-router-dom";

// Layouts
import UserLayout from "../layout/user/UserLayout";
// import AdminLayout from "../layouts/admin/AdminLayout";

// User Pages
import Home from "../pages/user/Home";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import CartPage from "../pages/user/CartPage";

// Admin Pages
// import Dashboard from "../pages/admin/Dashboard";
// import AdminProducts from "../pages/admin/Products";
// import Users from "../pages/admin/Users";

// Common Pages
// import NotFound from "../pages/NotFound";

const router = createBrowserRouter([

  // USER ROUTES
  {
    path: "/",
    element: <UserLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "products",
        element: <Products />,
      },

      {
        path: "products/:id",
        element: <ProductDetails />,
      },

      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },

  
  // // ADMIN ROUTES
  // {
  //   path: "/admin",
  //   element: <AdminLayout />,

  //   children: [
  //     {
  //       index: true,
  //       element: <Dashboard />,
  //     },

  //     {
  //       path: "products",
  //       element: <AdminProducts />,
  //     },

  //     {
  //       path: "users",
  //       element: <Users />,
  //     },
  //   ],
  // },

  // 404
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
]);

export default router