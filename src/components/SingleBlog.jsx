import React from "react";
import { getSingleBlog } from "../utils/apiCalls";
import { useLoaderData } from "react-router";

export const loader = async ({ params }) => {
  const singleBlogData = await getSingleBlog(params.blogId);
  return { singleBlogData };
};

const SingleBlog = () => {
  const {
    singleBlogData: { title, content },
  } = useLoaderData();

  return (
    <>
      <div className="flex flex-col pt-20 items-center justify-center">
        <h1 className="text-2xl">{title}</h1>
        <h3 className="text-1xl">{content}</h3>
      </div>
    </>
  );
};

export default SingleBlog;
