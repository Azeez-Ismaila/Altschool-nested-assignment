import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 mt-6 flex flex-col gap-10 ">
      <h1>Welcome to a Random User API Project</h1>
      <h2>Click Below to see how Nested Routes work</h2>
      <nav className="flex gap-4 justify-center">
        <Link
          className="rounded-md bg-blue-500 text-white p-2"
          to="description"
        >
          Click to See Description
        </Link>
        <Link className="rounded-md bg-blue-500 text-white p-2" to="example">
          Click to See Nested Example
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
