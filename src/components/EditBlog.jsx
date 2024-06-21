import React, { useState } from "react";
import { editBlog, getSingleBlog } from "../utils/apiCalls";
import { Form, redirect, useLoaderData } from "react-router-dom";

export const loader = async ({ params: { blogId } }) => {
  const singleBlogData = await getSingleBlog(blogId);
  return { singleBlogData };
};

export const action = async ({ request, params: { blogId } }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await editBlog(blogId, updates);
  return redirect("/blogs");
};

const EditBlog = () => {
  const {
    singleBlogData: { title: oldTitle, content: oldContent },
  } = useLoaderData();
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);
  return (
    <>
      <Form
        method="post"
        className="flex flex-col h-screen items-center justify-center gap-20 border"
      >
        <div className="border border-blue-600 p-10 flex flex-col items-center justify-center gap-10">
          <input
            type="text"
            placeholder="Enter blog title"
            className="border border-black p-5"
            name="title"
            value={title}
            onChange={(e) => setTitle(() => e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter blog content"
            className="border border-black p-5"
            name="content"
            value={content}
            onChange={(e) => setContent(() => e.target.value)}
          />
          <button className="border border-blue-700 py-5 px-10 rounded">
            Submit
          </button>
        </div>
      </Form>
    </>
  );
};

export default EditBlog;
