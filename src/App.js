import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth";
// import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { NavBar } from "./components/NavBar";
import NestedProducts from "./components/NestedProducts";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Profile from "./components/Profile";
import { RequiredAuth } from "./components/RequiredAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
const LayzAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LayzAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="nested-products" element={<NestedProducts />}>
          <Route index element={<FeaturedProducts />} />
          {/* show the page inside parent page */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route
          path="profile"
          element={
            <RequiredAuth>
              <Profile />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
