import { journalists, articles } from '../models/data.js';

export const getAllJournalists = (req, res) => {
  res.json(journalists);
};

export const getJournalistById = (req, res) => {
  const journalist = journalists.find(j => j.id === parseInt(req.params.id));
  if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
  res.json(journalist);
};

export const getArticlesByJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const filtered = articles.filter(a => a.journalistId === id);
  res.json(filtered);
};