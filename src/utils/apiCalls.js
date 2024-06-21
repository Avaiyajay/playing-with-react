const BASE_URL = "https://6674b9ba75872d0e0a975c66.mockapi.io/blogapi";

const getBlogList = async () => {
  const response = await fetch(`${BASE_URL}/blogs`);
  const blogList = await response.json();
  return blogList;
};

const getSingleBlog = async (blogId) => {
  const response = await fetch(`${BASE_URL}/blogs/${blogId}`);
  const blog = await response.json();
  return blog;
};

const addNewBlog = async (data) => {
  const response = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const blog = await response.json();
  return blog;
};

const editBlog = async (blogId, updates) => {
  const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  const blog = await response.json();
  return blog;
};

const deleteBlogAPI = async (blogId) => {
  const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
    method: "DELETE",
  });
  const blog = await response.json();
  return blog;
};

export { getBlogList, getSingleBlog, addNewBlog, editBlog, deleteBlogAPI };
