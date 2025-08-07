import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: Number(process.env.PORT || 8080),
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/miraj_portfolio',
  JWT_SECRET: process.env.JWT_SECRET || 'change_me',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173'
};