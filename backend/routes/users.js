import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/all', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/all/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;