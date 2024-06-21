import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BlogList, { loader as blogLoader } from "./components/BlogList.jsx";
import Root from "./components/Root.jsx";
import SingleBlog, {
  loader as singleBlogLoader,
} from "./components/SingleBlog.jsx";
import AddBlog, { action as addBlogAction } from "./components/AddBlog.jsx";
import EditBlog, {
  loader as editBlogLoader,
  action as editBlogAction,
} from "./components/EditBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/blogs",
        element: <BlogList />,
        loader: blogLoader,
      },
      {
        path: "/blogs/:blogId",
        element: <SingleBlog />,
        loader: singleBlogLoader,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
        action: addBlogAction,
      },
      {
        path: "/edit-blog/:blogId",
        element: <EditBlog />,
        loader: editBlogLoader,
        action: editBlogAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
