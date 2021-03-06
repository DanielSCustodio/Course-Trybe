const blogPost = require('express').Router();
const validationPostBlog = require('../controllers/middlewares/validationPostBlog');
const validationToken = require('../controllers/middlewares/validationToken'); 
const blogPostController = require('../controllers/blogPostController');

blogPost.post('/',
  validationToken.findToken,
  validationToken.checkToken,
  validationPostBlog.checkBody,
  validationPostBlog.checkIdcategory,
  blogPostController.createBlogPost);

blogPost.get('/',
  validationToken.findToken,
  validationToken.checkToken,
  blogPostController.getAllBlogPosts);

blogPost.get('/:id',
  validationToken.findToken,
  validationToken.checkToken,
  validationPostBlog.checkIdBlogPost,
  blogPostController.getBlogPostsId);

blogPost.put('/:id',
  validationPostBlog.userAuthorization,
  validationPostBlog.checkBodyTwo,
  validationToken.findToken,
  validationToken.checkToken, 
  blogPostController.editBlogPost);

module.exports = blogPost;