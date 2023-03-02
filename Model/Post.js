import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  image: {
    type: String,
  },
  author: {
    type: String,
  },
  authorImage: {
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
      userimage: {
        type: String,
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
  tags: [{ type: String }],
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
