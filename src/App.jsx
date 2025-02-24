import React from "react";
import { useAuth } from "./context/AuthProvider";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { lazy } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import UserProfile from "./pages/UserProfile";
import Gallery from "./pages/Gallery";
import { AnimatePresence, motion } from "framer-motion";
import ProductPage from "./pages/SingleProductPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const { state } = useAuth();

  const { pathname } = useLocation();
  const location = useLocation();

  console.log(location.key);
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={pathname}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="product/:product_id" element={<ProductPage />} /> */}
          <Route path="contact-us" element={<ContactUs />} />
          <Route
            path="userprofile"
            element={state.isAuthenticated ? <UserProfile /> : <SignIn />}
          />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
