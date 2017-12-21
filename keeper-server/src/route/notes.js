import express from 'express';
import Note from '../model/Note';

import userAuthenticate from '../middlewares/userAuthenticate';

const router = express.Router();

router.post('/', userAuthenticate, (req, res) => {
  Note.create({ ...req.body.note, user: req.userAuth._id })
    .then(note => res.json({ note }))
    .catch(err => res.status(400).json({ error: err }));
});

router.get('/', userAuthenticate, (req, res) => {
  Note.find({ user: req.userAuth._id })
    .sort({ createdAt: -1})
    .then(notes => res.json({ notes }));
});

router.get('/public/:id', (req, res) => {
  Note.findOne({ _id: req.params.id, isPrivate: false })
    .populate('user')
    .then(note => res.json({
      note: {
        subject: note.subject,
        body: note.body,
        updatedAt: note.updatedAt,
        nickname: note.user.nickname
      }
    }))
    .catch(err => res.status(400).json({ error: err }));
});

export default router;
