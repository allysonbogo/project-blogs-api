const { BlogPost, Category, PostCategory, User } = require('../models');
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

const findAll = async () => {
  const posts = await BlogPost.findAll(
    {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          attributes: ['id', 'name'],
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    },
  );

  return { type: null, message: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] } },
    {
      model: Category,
      attributes: ['id', 'name'],
      as: 'categories',
      through: { attributes: [] } }],
  });
  if (!post) {
    return { type: 404, message: 'Post does not exist' };
  }

  return { type: null, message: post };
};

module.exports = {
  create,
  findAll,
  findById,
};