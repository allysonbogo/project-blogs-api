const { BlogPost, Category, PostCategory } = require('../models');
const { decodeToken } = require('../utils/JWT');

const create = async ({ title, content, categoryIds }, token) => {
  const categories = await Category.findAll();
  const categoriesIds = categories.map((c) => c.id);

  if (categoryIds.some((id) => !categoriesIds.includes(id))) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }

  const { id: userId } = decodeToken(token);

  const createdPost = await BlogPost.create(
    { title, content, categoryIds, userId, published: new Date(), updated: new Date() },
  );
  categoryIds.map(async (category) => PostCategory.create(
    { postId: createdPost.id, categoryId: category },
  ));

  return { type: null, message: createdPost };
};

module.exports = {
  create,
};