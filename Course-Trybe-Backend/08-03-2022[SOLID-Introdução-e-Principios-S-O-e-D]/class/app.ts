import express from 'express';
import UserController from './controllers/UsersController';

const app = express();

app.use(express.json());

app.post('/users', UserController.validateParams, UserController.createUser);

export default app;