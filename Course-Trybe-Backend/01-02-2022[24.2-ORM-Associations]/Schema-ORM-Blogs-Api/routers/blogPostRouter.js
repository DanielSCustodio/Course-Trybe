const blogPost = require('express').Router();
/* const validationCategory = require('../controllers/middlewares/validationCategory');
const validationToken = require('../controllers/middlewares/validationToken'); */
const blogPostController = require('../controllers/blogPostController');

blogPost.post('/',
blogPostController.createBlogPost);

module.exports = blogPost;