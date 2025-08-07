import { Router } from 'express';
import { createProject, deleteProject, getProject, listProjects, updateProject } from '../controllers/projectController';
import { requireAuth } from '../middleware/auth';

const router = Router();
router.get('/', listProjects);
router.get('/:id', getProject);
router.post('/', requireAuth, createProject);
router.put('/:id', requireAuth, updateProject);
router.delete('/:id', requireAuth, deleteProject);

export default router;