import { getAllUsers, getUserId, CreateUser, UpdateUser,deleteUser}from '../controllers/UserControllers.js';
const userRoutes = (app) => {
  app.get('/users', getAllUsers);
  app.get('/users/:id', getUserId);
  app.post('/users', CreateUser);
  app.put('/users/:id', UpdateUser);
  app.delete('/users/:id', deleteUser);
};

export default userRoutes;