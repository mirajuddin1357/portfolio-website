import { Router } from 'express';
import { createBlog, deleteBlog, getBlog, listBlogs, updateBlog } from '../controllers/blogController';
import { requireAuth } from '../middleware/auth';

const router = Router();
router.get('/', listBlogs);
router.get('/:slug', getBlog);
router.post('/', requireAuth, createBlog);
router.put('/:slug', requireAuth, updateBlog);
router.delete('/:slug', requireAuth, deleteBlog);

export default router;