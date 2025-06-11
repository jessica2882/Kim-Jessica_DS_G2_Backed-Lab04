import {
  getAllJournalists,
  getJournalistById,
  getArticlesByJournalist
} from '../controllers/journalistController.js';

const journalistRoutes = (app) => {
  app.get('/journalists', getAllJournalists);
  app.get('/journalists/:id', getJournalistById);
  app.get('/journalists/:id/articles', getArticlesByJournalist);
};

export default journalistRoutes;
