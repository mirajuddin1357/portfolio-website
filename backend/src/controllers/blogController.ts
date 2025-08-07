import { Request, Response } from 'express';
import Blog from '../models/Blog';

export async function listBlogs(_req: Request, res: Response) {
  const blogs = await Blog.find().sort({ date: -1 });
  res.json(blogs);
}

export async function getBlog(req: Request, res: Response) {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ error: 'Not found' });
  res.json(blog);
}

export async function createBlog(req: Request, res: Response) {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json(blog);
}

export async function updateBlog(req: Request, res: Response) {
  const blog = await Blog.findOneAndUpdate({ slug: req.params.slug }, req.body, { new: true });
  if (!blog) return res.status(404).json({ error: 'Not found' });
  res.json(blog);
}

export async function deleteBlog(req: Request, res: Response) {
  await Blog.findOneAndDelete({ slug: req.params.slug });
  res.status(204).end();
}