import express, { Request, Response, Router } from 'express';
import { User } from './user.model';
import * as usersService from './user.service';

const router: Router = express.Router();

router
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    const userId = req.params['id'];
    if (!userId) {
      res.status(400).send({ message: 'Invalid user ID' });
      return;
    }
    const user = await usersService.getById(userId);
    if (user) {
      res.json(User.toResponse(user));
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  });

export default router;
