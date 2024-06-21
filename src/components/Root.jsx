import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 py-2">
        <Link to="/blogs" className="border border-blue-500 px-4 py-2 rounded">
          Load All Blogs
        </Link>
        <Link
          to="/add-blog"
          className="border border-green-500 px-4 py-2 rounded"
        >
          Add New Blog
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Root;
