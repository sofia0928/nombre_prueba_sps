import {Router} from 'express';
import { createUser, getUser, getUsers, deleteUser } from '../controller/userController.js';

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);

export default router;