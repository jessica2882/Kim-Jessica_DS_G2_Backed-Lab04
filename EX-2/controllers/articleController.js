import { articles } from '../models/data.js';
export const getAllArticles = (req, res) => {
  res.json(articles);
};

export const getArticleById = (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json(article);
};

export const createArticle = (req, res) => {
  const { title, content, journalistId, categoryId } = req.body;
  const newArticle = {
    id: articles.length + 1,
    title,
    content,
    journalistId,
    categoryId
  };
  articles.push(newArticle);
  res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ error: 'Article not found' });
  const { title, content, journalistId, categoryId } = req.body;
  if (title) article.title = title;
  if (content) article.content = content;
  if (journalistId) article.journalistId = journalistId;
  if (categoryId) article.categoryId = categoryId;
  res.json(article);
};

export const deleteArticle = (req, res) => {
  const index = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Article not found' });
  articles.splice(index, 1);
  res.status(204).send();
};