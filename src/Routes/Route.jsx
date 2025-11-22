import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import HomePage from "../Pages/HomePage";
import BikeAboutTown from "../Pages/About/about";
import Contact from "../Pages/contact";
import ShoppingCart from "../Pages/Cart";
import AdminDashboard from "../components/AdminDashboard.jsx";
import Login from "../components/Login.jsx";
import NotAuthorized from "../components/NotAuthorized.jsx";
import ComingSoon from "../components/ComingSoon.jsx";
import NotFound from "../components/NotFound.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Register from "../components/Register.jsx";
import GuestRoute from "../components/GuestRoute.jsx";
import Favorites from "../Pages/Favorites.jsx";
import ProductsGrid from "../Pages/CatalogGrid.jsx";
import Details from "../Pages/ProductDetails.jsx";
import BestProducts from "../Pages/BestProducts.jsx";
import UserProfile from "../Pages/UserProfile.jsx";
import AboutUs from "../test/AboutUs.jsx";
import BikeSellerProfile from "../test/Profile.jsx";
import Checkout from "../Pages/checkoutForm.jsx";
import OrderConfirmation from "../Pages/orderConfirmation.jsx";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/Store",
        element: <ProductsGrid />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <ShoppingCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/best-product",
        element: <BestProducts />,
      },

      {
        path: "/login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <Register />
          </GuestRoute>
        ),
      },
      {
        path: "/not-authorized",
        element: <NotAuthorized />,
      },
      {
        path: "/product/:id",
        element: <Details />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/app",
        element: <ComingSoon />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);

export default Router;
