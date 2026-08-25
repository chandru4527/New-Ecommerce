import { createBrowserRouter } from "react-router-dom";

// Layouts
import UserLayout from "../layout/user/UserLayout";
import AdminLayout from "../layout/admin/AdminLayout";

// Route Protection
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";

// Auth Pages
import Login from "../pages/authpage/LoginPage";
import Register from "../pages/authpage/RegisterPage";

// User Pages
import Home from "../pages/user/Home";
import Products from "../pages/user/Products";
import ProductDetails from "../pages/user/ProductDetails";
import CartPage from "../pages/user/CartPage";
import Blogs from "../pages/user/Blogs";
import Aboutus from "../pages/user/Aboutus";
import Contact from "../pages/user/Contact";
import WishlistPage from "../pages/user/WishlistPage";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import AdminProfile from "../pages/admin/AdminProfile";
import TotalProducts from "../pages/admin/products management/ToatalProducts";
import TotalUsers from "../pages/admin/user management/TotalUsers";

// Not Found
import NotFound from "../components/NotFound";

const router = createBrowserRouter([

  // user routes
  {
    path: "/",
    element: <UserLayout />,

    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          title: "Home",
          permission: ["user", "admin"],
        },
      },

      {
        path: "products",
        element: <Products />,
        handle: {
          title: "Products",
          permission: ["user", "admin"],
        },
      },

      {
        path: "products/:id",
        element: <ProductDetails />,
        handle: {
          title: "Product Details",
          permission: ["user", "admin"],
        },
      },

      {
        path: "cart",
        element: <CartPage />,
        handle: {
          title: "Shopping Cart",
          permission: ["user"],
        },
      },

      {
        path: "blogs",
        element: <Blogs />,
        handle: {
          title: "Blogs",
          permission: ["user", "admin"],
        },
      },

      {
        path: "about",
        element: <Aboutus />,
        handle: {
          title: "About Us",
          permission: ["user", "admin"],
        },
      },

      {
        path: "contact",
        element: <Contact />,
        handle: {
          title: "Contact",
          permission: ["user", "admin"],
        },
      },

      {
        path: "wishlist",
        element: <WishlistPage />,
        handle: {
          title: "Wishlist",
          permission: ["user"],
        },
      },
    ],
  },

  // public rotes
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
        handle: {
          title: "Login",
          permission: ["guest"],
        },
      },

      {
        path: "/register",
        element: <Register />,
        handle: {
          title: "Register",
          permission: ["guest"],
        },
      },
    ],
  },

  // admin routes
  {
    element: <AdminRoute />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            handle: {
              title: "Dashboard",
              permission: ["admin"],
            },
          },
          {
            path: "admin-profile",
            element: <AdminProfile />,
            handle: {
              title: "Admin Profile",
              permission: ["admin"],
            },
          },
          {
            path: "allproducts",
            element: <TotalProducts />,
            handle: {
              title: "All Products",
              permission: ["admin"],
            },
          },
          {
            path: "allusers",
            element: <TotalUsers />,
            handle: {
              title: "All Users",
              permission: ["admin"],
            },
          },
        ],
      },
    ],
  },

  // 404 notfound 
  {
    path: "*",
    element: <NotFound />,
    handle: {
      title: "Page Not Found",
      permission: ["guest", "user", "admin"],
    },
  },
]);

export default router;