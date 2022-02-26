const jwt = require('jsonwebtoken');
const blogPostsService = require('../services/blogPostsService');
/* const JWT_DATA = require('../util/jwtConfig'); */

const createBlogPost = async (req, res) => {
  const { token } = req.headers.authorization;
  const { title, content, categoryId } = req.body;
  const incognit = jwt.decode(token);
  console.log('DECODE====>', incognit);
  const userId = 1;
  const { id } = await blogPostsService.createBlogPost({ userId, title, content, categoryId });
  return res.status(201).json({ id, title, content });
};

module.exports = {
  createBlogPost,
};
