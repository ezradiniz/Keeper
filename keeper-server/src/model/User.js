import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import env from '../env';

const User = new mongoose.Schema(
  {
    nickname: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

User.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const generateToken = data => jwt.sign(data, env.JWT_SECRET);

User.methods.toJson = function toJson() {
  return {
    nickname: this.nickname,
    email: this.email,
    token: generateToken({ nickname: this.nickname, email: this.email })
  };
};

User.plugin(uniqueValidator, {
  message: 'Fail'
});

export default mongoose.model('User', User);
