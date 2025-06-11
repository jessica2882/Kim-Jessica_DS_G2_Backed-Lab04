import {
  getAllCategories,
  getCategoryById,
  getArticlesByCategory
} from '../controllers/categoryController.js';

const categoryRoutes = (app) => {
  app.get('/categories', getAllCategories);
  app.get('/categories/:id', getCategoryById);
  app.get('/categories/:id/articles', getArticlesByCategory);
};

export default categoryRoutes;