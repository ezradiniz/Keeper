import express from 'express';
import User from '../model/User';
import userAuthenticate from '../middlewares/userAuthenticate';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body.credentials;
  User
    .findOne({ email })
    .then(user => {
      if (user && user.isValidPassword(password)) {
        res.json({ user: user.toJson() });
      } else {
        res.status(400).json({ error: err });
      }
    })
    .catch(err => res.status(400).json({ error: err }));
});

router.get('/', userAuthenticate, (req, res) => {
  res.json({user: req.userAuth.toJson()});
});

export default router;
