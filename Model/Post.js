import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  image: {
    type: String,
  },
  author: {
    type: String,
  },
  authorId: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    {
      username: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  commentslength: {
    type: Number,
  },
  views: {
    type: Number,
  },
  approved: {
    type: Boolean,
  },
});

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;
