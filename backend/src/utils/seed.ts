import mongoose from 'mongoose';
import { env } from '../config/env';
import User from '../models/User';
import Project from '../models/Project';
import Blog from '../models/Blog';

async function run() {
  await mongoose.connect(env.MONGODB_URI);
  console.log('Connected to DB');
  const adminEmail = 'admin@example.com';
  if (!(await User.findOne({ email: adminEmail }))) {
    await User.create({ email: adminEmail, password: 'admin123' });
    console.log('Created admin user:', adminEmail, 'password: admin123');
  }
  if ((await Project.countDocuments()) === 0) {
    await Project.create({ title: 'Demo Project', description: 'Hello world', image: '', tags: ['demo'], category: 'Web' });
    console.log('Seeded demo project');
  }
  if ((await Blog.countDocuments()) === 0) {
    await Blog.create({ slug: 'hello-world', title: 'Hello World', summary: 'First post', body: 'Content', tags: ['demo'], date: new Date() });
    console.log('Seeded demo blog');
  }
  await mongoose.disconnect();
}

run().then(() => process.exit(0));