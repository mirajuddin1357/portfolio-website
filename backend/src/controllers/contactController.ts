import { Request, Response } from 'express';
import ContactMessage from '../models/ContactMessage';

export async function submitContact(req: Request, res: Response) {
  const msg = new ContactMessage(req.body);
  await msg.save();
  res.status(201).json({ ok: true });
}

export async function listContacts(_req: Request, res: Response) {
  const items = await ContactMessage.find().sort({ createdAt: -1 });
  res.json(items);
}