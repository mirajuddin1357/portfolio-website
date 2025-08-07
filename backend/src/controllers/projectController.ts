import { Request, Response } from 'express';
import Project from '../models/Project';

export async function listProjects(_req: Request, res: Response) {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
}

export async function getProject(req: Request, res: Response) {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ error: 'Not found' });
  res.json(project);
}

export async function createProject(req: Request, res: Response) {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
}

export async function updateProject(req: Request, res: Response) {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!project) return res.status(404).json({ error: 'Not found' });
  res.json(project);
}

export async function deleteProject(req: Request, res: Response) {
  await Project.findByIdAndDelete(req.params.id);
  res.status(204).end();
}