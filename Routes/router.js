import express from "express";
import { upload, uploadImage } from "../Cloudinary/Cloudinary.js";
import { verifyCacheForBlog } from "../Controller/cache-controller.js";
import { sendEmail } from "../Controller/email-controller.js";
import { rssfeed } from "../RSS/rss.js";
import {
  addView,
  approvePost,
  deletePost,
  deletePostUser,
  getAuthorBlogs,
  getBlogbyTag,
  getBlogData_Edit,
  getBlogs,
  getLatestBlogsForHomePage,
  getLatestPosts,
  getPopularBlogsForHomePage,
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
Router.post("/upload/image", upload.single("image"), uploadImage);
Router.post("/create/:token", post);
Router.post("/admin", verifyToken);
Router.get("/posts/submitted", getSubmittedPosts);
Router.get("/posts/submitted/user/author/:authorId", getUserSubmittedPosts);
Router.get("/blogs/latest/home/:category", getLatestBlogsForHomePage);
Router.get("/blogs/popular/home/:category", getPopularBlogsForHomePage);
Router.get("/get/all/blogs/popular/:category/:page/:limit", getPopularPosts);
Router.get("/get/all/blogs/latest/:category/:page/:limit", getLatestPosts);
Router.get("/blog/:id", verifyCacheForBlog, getPostbyid);
Router.delete("/post/:id", deletePost);
Router.delete("/post/user/delete/blog/:id", deletePostUser);
Router.post("/post/:id", addView);
Router.post("/post/:id/new/comment", submitComment);
Router.get("/blog/tag/:tag", getBlogbyTag);
Router.get("/blog/data/:id/:idToken", getBlogData_Edit);
Router.patch("/blog/update/:id/:idToken", updateBlog);
Router.get("/blogs/author/:author", getAuthorBlogs);
Router.post("/post/approve/:id", approvePost);
Router.patch("/blog/update", updateBlogAuthor);
Router.post("/blog/update/comments", updateBlogAuthorinComments);
Router.get("/search", searchBlog);
Router.get("/blogs/slider", sliderShowBlogs);
Router.post("/sendEmail", sendEmail);
Router.get("/rss", rssfeed);
export default Router;
