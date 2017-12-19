import express from 'express';
import Note from '../model/Note';

import userAuthenticate from '../middlewares/userAuthenticate';

const router = express.Router();
router.use(userAuthenticate);

router.post('/', (req, res) => {
  Note.create({ ...req.body.note, user: req.userAuth._id })
    .then(note => res.json({ note }))
    .catch(err => res.status(400).json({ error: err }));
});

router.get('/', (req, res) => {
  Note.find({ user: req.userAuth._id }).then(notes => res.json({ notes }));
});

export default router;
