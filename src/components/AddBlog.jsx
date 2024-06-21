import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { addNewBlog } from "../utils/apiCalls";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const formContent = Object.fromEntries(formData);
  await addNewBlog(formContent);
  return redirect("/blogs");
};

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

export default AddBlog;
