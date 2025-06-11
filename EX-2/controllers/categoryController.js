import { categories, articles } from '../models/data.js';

export const getAllCategories = (req, res) => {
  res.json(categories);
};

export const getCategoryById = (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ error: 'Category not found' });
  res.json(category);
};

export const getArticlesByCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const filtered = articles.filter(a => a.categoryId === id);
  res.json(filtered);
};