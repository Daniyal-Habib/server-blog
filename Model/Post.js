import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
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
      authorid: {
        type: String,
        required: true,
      },
      username: {
        type: String,
      },
      userimage: {
        type: String,
      },
      comment: {
        type: String,
      },
      date: {
        type: Date,
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
PostSchema.index({
  title: "text",
  description: "text",
  tags: "text",
});

const PostModel = mongoose.model("posts", PostSchema);
export default PostModel;
