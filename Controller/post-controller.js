import PostModel from "../Model/Post.js";

export const post = async (req, res) => {
  const {
    image,
    title,
    body,
    category,
    description,
    comments,
    author,
    authorId,
    approved,
  } = req.body;
  const CreatedAt = Date.parse(req.body.CreatedAt);
  const postData = {
    image,
    title,
    body,
    category,
    CreatedAt,
    description,
    comments,
    author,
    authorId,
    approved,
  };
  const newPost = new PostModel(postData);
  try {
    await newPost.save();
    return res.status(200).json({
      msg: "post added successfully!",
    });
  } catch (e) {
    return res.status(401).json({
      msg: e.message,
    });
  }
};
export const getLatestPosts = async (req, res) => {
  try {
    let posts;
    let category = req.body.category;
    if (category === "") {
      posts = await PostModel.find({
        approved: true,
      }).sort({ CreatedAt: "desc" });
    } else {
      posts = await PostModel.find({
        approved: true,
        category: category,
      })
        .sort({ CreatedAt: "desc" })
        .limit(15);
    }
    res.status(200).json(posts);
  } catch (e) {
    return res.status(401).json({
      msg: e.message,
    });
  }
};
export const getSubmittedPosts = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({ approved: false }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
  } catch (e) {
    return res.status(401).json({
      msg: e.message,
    });
  }
};
export const getPopularPosts = async (req, res) => {
  try {
    let posts;
    let category = req.body.category;
    if (category === "") {
      posts = await PostModel.find({
        approved: true,
      }).sort({ views: "desc" });
    } else {
      posts = await PostModel.find({
        approved: true,
        category: category,
      })
        .sort({ views: "desc" })
        .limit(10);
    }
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const getUserSubmittedPosts = async (req, res) => {
  try {
    let posts;
    let authorId = req.params.authorId;
    posts = await PostModel.find({ authorId: authorId }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
    console.log(posts);
  } catch (e) {
    console.log(e);
  }
};
export const getPostbyid = async (req, res) => {
  try {
    const Post = await PostModel.findById(req.params.id);
    res.status(200).json(Post);
  } catch (e) {
    res.status(400).json("Post not found");
  }
};
export const deletePost = async (req, res) => {
  try {
    await PostModel.findById(req.params.id).deleteOne();
    res.status(200).json("Postdeleted!");
  } catch (e) {
    return res.status(401).json({
      msg: e.message,
    });
  }
};
export const getPostbyCategory = async (req, res) => {
  try {
    let posts;
    let category = req.params.category;
    posts = await PostModel.find({
      category: category,
      approved: true,
    }).sort({
      CreatedAt: "desc",
    });
    res.status(200).json(posts);
  } catch (e) {
    return res.status(401).json({
      msg: e.message,
    });
  }
};
export const submitComment = async (req, res) => {
  try {
    const id = req.params.id;
    const newComment = await PostModel.updateOne(
      { _id: id },
      {
        $push: {
          comments: {
            username: req.body.username,
            comment: req.body.comment,
            date: new Date(),
          },
        },
        $inc: { commentslength: 1 },
      }
    );
    res.status(200).json(newComment);
  } catch (e) {
    console.log(e);
  }
};

export const getPostsbyPopularity = async (req, res) => {
  try {
    let posts;
    posts = await PostModel.find({ approved: true })
      .sort({ views: "desc" })
      .limit(20);
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
  }
};
export const addView = async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.updateOne(
      { _id: id },
      {
        $inc: {
          views: 1,
        },
      }
    );
    res.status(200).json("success!");
  } catch (e) {
    res.status(400).json(e);
  }
};
export const approvePost = async (req, res) => {
  try {
    const id = req.params.id;
    await PostModel.updateOne({ _id: id }, { $set: { approved: true } });
    res.status(200).json("success!");
  } catch (e) {
    res.status(400).json(e);
  }
};
export const getUserPosts = async (req, res) => {
  try {
    let posts;
    let author = req.query.user;
    await PostModel.find({ author: author });
    res.status(200).json(posts);
  } catch (e) {
    return res.status(401).json({
      msg: e.message,
    });
  }
};
export const deletePostUser = async (req, res) => {
  try {
    await PostModel.findById(req.params.id).deleteOne();
    res.status(200).json({
      msg: "Post deleted!",
    });
  } catch (e) {
    res.status(404).json({
      msg: e.message,
    });
  }
};
