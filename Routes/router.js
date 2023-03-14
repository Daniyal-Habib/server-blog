import express from "express";
import { upload, uploadImage } from "../Cloudinary/Cloudinary.js";
import {
  addView,
  approvePost,
  deletePost,
  deletePostUser,
  getAuthorBlogs,
  getBlogbyTag,
  getBlogData_Edit,
  getBlogs,
  getLatestPosts,
  getPopularPosts,
  getPostbyCategory,
  getPostbyid,
  getPostsbyPopularity,
  getSubmittedPosts,
  getUserSubmittedPosts,
  post,
  searchBlog,
  sliderShowBlogs,
  submitComment,
  updateBlog,
  updateBlogAuthor,
  updateBlogAuthorinComments,
} from "../Controller/post-controller.js";
import { verifyToken } from "../FirebaseMiddleware.js";
const Router = express.Router();
Router.get("/get/all/blogs/:page/:limit", getBlogs);
Router.post("/upload/image", upload.single("image"), uploadImage);
Router.post("/create/:token", post);
Router.post("/admin", verifyToken);
Router.post("/latestposts/", getLatestPosts);
Router.get("/posts/submitted", getSubmittedPosts);
Router.get("/posts/submitted/user/author/:authorId", getUserSubmittedPosts);
Router.post("/get/all/blogs/popular/:page/:limit", getPopularPosts);
Router.post("/get/all/blogs/latest/:page/:limit", getLatestPosts);
Router.get("/blog/:id", getPostbyid);
Router.delete("/post/:id", deletePost);
Router.delete("/post/user/delete/blog/:id", deletePostUser);
Router.post("/post/:id", addView);
Router.get("/posts/category/:category", getPostbyCategory);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/popular", getPostsbyPopularity);
Router.get("/blog/tag/:tag", getBlogbyTag);
Router.get("/blog/data/:id", getBlogData_Edit);
Router.put("/blog/update/:id", updateBlog);
Router.get("/blogs/author/:author", getAuthorBlogs);
Router.post("/post/approve/:id", approvePost);
Router.put("/blog/update", updateBlogAuthor);
Router.post("/blog/update/comments", updateBlogAuthorinComments);
Router.get("/search", searchBlog);
Router.get("/blogs/slider", sliderShowBlogs);
export default Router;
