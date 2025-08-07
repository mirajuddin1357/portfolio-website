import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  tags: [String],
  category: { type: String, index: true },
  githubUrl: String,
  liveUrl: String
}, { timestamps: true });

export default mongoose.model<IProject>('Project', ProjectSchema);