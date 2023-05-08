import NodeCache from "node-cache";
export const cache = new NodeCache({ stdTTL: 40000 });
export const verifyCacheForBlog = (req, res, next) => {
  try {
    const { id } = req.params;
    if (cache.has(id)) {
      return res.status(200).json(cache.get(id));
    }
    return next();
  } catch (e) {
    console.log(e);
  }
};
