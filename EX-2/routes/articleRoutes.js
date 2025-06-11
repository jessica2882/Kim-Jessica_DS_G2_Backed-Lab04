
import { getAllArticles, getArticleById,createArticle,updateArticle,deleteArticle } from "../controllers/articleController.js";
const articleRoutes = (app) =>{
    app.get('/articles', getAllArticles);
    app.get('artiicle/:id', getArticleById);
    app.post('/articles', createArticle);
    app.put('/articles/:id', updateArticle);
    app.delete('/articles/:id', deleteArticle);
};
export default articleRoutes;