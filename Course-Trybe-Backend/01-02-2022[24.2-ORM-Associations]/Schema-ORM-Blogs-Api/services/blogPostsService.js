const { BlogPost } = require('../models');

const createBlogPost = async ({ title, content, categoryId }) => {
  const newBlogPost = await BlogPost.create({ 
    title,
    content,
    categoryId,
    published: new Date(),
    updated: new Date(),
  });
  return newBlogPost.dataValues;
};

module.exports = {
  createBlogPost,
};