import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  slug: string;
  title: string;
  summary: string;
  body: string;
  tags: string[];
  date: Date;
}

const BlogSchema = new Schema<IBlog>({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  body: { type: String, required: true },
  tags: [String],
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model<IBlog>('Blog', BlogSchema);