const jwt = require('jsonwebtoken');
const { blogPostSchema } = require('../../util/validationSchemaBlogPosts');
const sendResponse = require('./responseError');
const { Category, BlogPost } = require('../../models');

const CATEGORY_NOT_FOUND = '"categoryIds" not found';
const ID_NOT_EXIST = 'Post does not exist';
const CATEGORY_CANNOT_BE_EDITED = 'Categories cannot be edited';
const UNAUTHORIZED_USER = 'Unauthorized user';
const TITLE_REQUIRED = '"title" is required';

const checkBody = async (req, res, next) => {
  try {
    await blogPostSchema.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

const checkIdcategory = async (req, res, next) => {
  const { categoryIds } = await req.body;

  const checkId = await Promise.all(
    categoryIds.map(async (id) => {
      const result = await Category.findByPk(id);
      return result;
    }),
  );

  const checkCategory = checkId.some((id) => id === null);
  
  if (checkCategory) {
    const { status, message } = await sendResponse(CATEGORY_NOT_FOUND);
    return res.status(status).json({ message });
  }
  
  next();
};

const checkIdBlogPost = async (req, res, next) => {
  const { id } = req.params;
  const result = await BlogPost.findByPk(id);
  if (!result) {
    const { status, message } = await sendResponse(ID_NOT_EXIST);
    return res.status(status).json({ message });
  }
  next();
};

const notEditCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) {
    const { status, message } = await sendResponse(CATEGORY_CANNOT_BE_EDITED);
    return res.status(status).json({ message });
  }
  next();
};

const userAuthorization = async (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { userId } = await BlogPost.findByPk(id);
  const decode = jwt.decode(token);
  const { id: idDecode } = decode; 
  if (idDecode !== userId) {
    const { status, message } = await sendResponse(UNAUTHORIZED_USER);
    return res.status(status).json({ message });
  }
  next();
};

const checkTitle = async (req, res, next) => {
  const { title } = req.body;
    console.log('TITLE===>', title);

  if (!title) {
    const { status, message } = await sendResponse(TITLE_REQUIRED);
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  checkBody,
  checkIdcategory,
  checkIdBlogPost,
  notEditCategory,
  userAuthorization,
  checkTitle,
};