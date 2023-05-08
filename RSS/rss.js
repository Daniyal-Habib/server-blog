import RSS from "rss";
import PostModel from "../Model/Post.js";
import { format } from "date-fns";

export const rssfeed = async (req, res) => {
  const feed = new RSS({
    title: "My Blog RSS Feed",
    description: "The latest blog posts from My Blog",
    feed_url: "https://www.hubblefeed.com/rss.xml",
    site_url: "https://www.hubblefeed.com",
    //   image_url: "https://www.myblog.com/images/logo.png",
    managingEditor: "John Doe",
    webMaster: "Jane Doe",
    ttl: 60,
  });

  try {
    const posts = await PostModel.find({ approved: true })
      .sort({ CreatedAt: "desc" })
      .limit(20)
      .exec();

    posts.forEach((post) => {
      feed.item({
        title: post.title,
        description: post.description,
        url: `https://www.hubblefeed.com/${post.category}/${post.title}/${post._id}`,
        author: post.author,
        date: format(post.CreatedAt, "ddd, dd MMM yyyy HH:mm:ss "),
        categories: post.tags,
      });
    });

    res.set("Content-Type", "text/xml");
    res.send(feed.xml());
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
