import React, { useState } from "react";
import { deleteBlogAPI, getBlogList } from "../utils/apiCalls";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

export const loader = async () => {
  const data = await getBlogList();
  return { data };
};

const BlogList = () => {
  const { data } = useLoaderData();
  const [blogList, setBlogList] = useState(data);

  const deleteBlog = async (blogId) => {
    await deleteBlogAPI(blogId);
    const data = await getBlogList();
    setBlogList(data);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-2 px-40 pt-5">
        {blogList.length ? (
          blogList.map(({ id, title, content }) => {
            return (
              <>
                <Link
                  to={`/blogs/${id}`}
                  key={id}
                  className="border border-black p-4"
                >
                  <h1 className="text-2xl text-extrabold">{title}</h1>
                  <p>{content}</p>
                  <div className="flex gap-4 pt-2">
                    <Link
                      to={`/edit-blog/${id}`}
                      className="border rounded px-3 py-2 border-yellow-500"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => deleteBlog(id)}
                      className="border border-red-500 rounded px-3 py-2"
                    >
                      Delete
                    </Link>
                  </div>
                </Link>
              </>
            );
          })
        ) : (
          <h1>No Blogs</h1>
        )}
      </div>
    </>
  );
};

export default BlogList;
