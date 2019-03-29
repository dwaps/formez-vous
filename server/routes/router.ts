import { Router, Request, Response } from 'express';
import Server from '../classes/server';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Lecture des messages',
  });
});

router.post('/messages/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { pseudo, message } = req.body;

  const payload = { pseudo, message };

  const server = Server.instance;

  server.io.in(id).emit('new-private-message', payload);

  res.json({ id, pseudo, message });
});

export default router;

