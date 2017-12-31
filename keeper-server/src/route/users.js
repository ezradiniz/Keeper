import express from 'express';
import User from '../model/User';

const router = express.Router();

router.post('/', (req, res) => {
  const user = new User(req.body.user);
  user.save()
    .then(userRecord => {
      res.json({ user: userRecord.toJson() });
    })
    .catch(err => res.status(400).json({ error: 'Invalid data'}));
});

export default router;
