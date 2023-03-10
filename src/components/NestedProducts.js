import React from "react";
import { Link, Outlet } from "react-router-dom";

function NestedProducts() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products..." />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default NestedProducts;
