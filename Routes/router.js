import express from "express";
import {
  addView,
  approvePost,
  deletePost,
  deletePostUser,
  getAuthorBlogs,
  getBlogbyTag,
  getLatestPosts,
  getPopularPosts,
  getPostbyCategory,
  getPostbyid,
  getPostsbyPopularity,
  getSubmittedPosts,
  getUserSubmittedPosts,
  post,
  submitComment,
  updateBlog,
} from "../Controller/post-controller.js";
import { createUser } from "../Controller/user-controller.js";
const Router = express.Router();
Router.post("/createUser", createUser);
Router.post("/create", post);
Router.post("/latestposts/", getLatestPosts);
Router.get("/posts/submitted", getSubmittedPosts);
Router.get("/posts/submitted/user/author/:authorId", getUserSubmittedPosts);
Router.post("/popularposts", getPopularPosts);
Router.get("/blog/:id", getPostbyid);
Router.delete("/post/:id", deletePost);
Router.delete("/post/user/delete/blog/:id", deletePostUser);
Router.post("/post/:id", addView);
Router.get("/posts/category/:category", getPostbyCategory);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/popular", getPostsbyPopularity);
Router.get("/", getPostsbyPopularity);
Router.get("/blog/tag/:tag", getBlogbyTag);
Router.put("/blog/update/:id", updateBlog);
Router.get("/blogs/author/:author", getAuthorBlogs);
Router.post("/post/approve/:id", approvePost);
export default Router;
