import { Router } from 'express';
import { listContacts, submitContact } from '../controllers/contactController';
import { requireAuth } from '../middleware/auth';

const router = Router();
router.post('/', submitContact);
router.get('/', requireAuth, listContacts);

export default router;