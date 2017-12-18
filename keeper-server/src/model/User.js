import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    nickname: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('User', User);
