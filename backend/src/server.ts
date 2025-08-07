import mongoose from 'mongoose';
import app from './app';
import { env } from './config/env';

async function main() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log('Connected to MongoDB');
    app.listen(env.PORT, () => console.log(`API listening on :${env.PORT}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

main();