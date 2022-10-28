import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="grid grid-cols-6 bg-emerald-800 p-3 text-white">
      <Link className="col-span-3 mx-auto" to="/">
        Random Users
      </Link>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>

      {/* <div className="">Random Users</div>
      <ul className="">
        <li></li>
        <li>About</li>
        <li>Users</li>
      </ul> */}
    </div>
  );
}

export default Nav;
