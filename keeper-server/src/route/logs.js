import express from 'express';
import Log from '../model/Log';

import userAuthenticate from '../middlewares/userAuthenticate';

const router = express.Router();

router.get('/', userAuthenticate, (req, res) => {
  Log.find({ user: req.userAuth._id })
    .sort({ createdAt: -1 })
    .then(logs => res.json({ logs }));
});

export default router;
