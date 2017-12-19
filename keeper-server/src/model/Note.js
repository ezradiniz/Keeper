import mongoose from 'mongoose';

const Note = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    body: { type: String, required: true },
    shared: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }
  },
  { timestamps: true }
);

export default mongoose.model('Note', Note);
