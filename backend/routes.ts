import { Router, Request, Response } from 'express';
import db from './db';

const router = Router();

router.get('/users', async (req: Request, res: Response) => {
  try { 
    const users = await db.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/users', async (req: Request, res: Response) => {
  const { name, password } = req.body; 
  const user = await db.addUser({ name, password });
  res.json(user);
});

router.delete('/users', async (req: Request, res: Response) => {
  await db.removeUsers();
  res.status(200).json({ code: 200, status: 'success'});
});
export default router;
