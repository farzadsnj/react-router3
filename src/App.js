import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";
import NestedProducts from "./components/NestedProducts";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
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
      </Routes>
    </>
  );
}

export default App;
