

import express from 'express';
import articleRoutes from './routes/articleRoutes.js';
import journalistRoutes from './routes/journalistRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Register routes
articleRoutes(app);
journalistRoutes(app);
categoryRoutes(app);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

