
import express from 'express';
import logger from './src/MiddleWares/Logger.js';
import userRoutes from './src/Routers/UserRouters.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

// Apply user routes using function
userRoutes(app);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});