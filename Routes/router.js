import express from "express";
import {
  addView,
  approvePost,
  deletePost,
  getLatestPosts,
  getPopularPosts,
  getPostbyCategory,
  getPostbyid,
  getPostsbyPopularity,
  getSubmittedPosts,
  getUserSubmittedPosts,
  post,
  submitComment,
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
Router.post("/post/:id", addView);
Router.get("/posts/category/:category", getPostbyCategory);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/popular", getPostsbyPopularity);
Router.get("/", getPostsbyPopularity);

Router.post("/post/approve/:id", approvePost);
export default Router;
