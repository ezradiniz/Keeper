import express from 'express';
import Note from '../model/Note';
import reqFilter from '../utils/reqFilter';

import userAuthenticate from '../middlewares/userAuthenticate';

const router = express.Router();

router.post('/', userAuthenticate, (req, res) => {
  Note.create({ ...req.body.note, user: req.userAuth._id })
    .then(note => res.json({ note }))
    .catch(err => res.status(400).json({ error: err }));
});

router.get('/', userAuthenticate, (req, res) => {
  let filter = {};
  if (req.query.archive) {
    filter.isArchived = req.query.archive === 'true';
  }
  Note.find({ user: req.userAuth._id, ...filter })
    .sort({ createdAt: -1})
    .then(notes => res.json({ notes }));
});

router.put('/:id', userAuthenticate, (req, res) => {
  const note = reqFilter(req.body.note, ['isPrivate', 'isArchived', 'subject', 'body']);
  Note.findOneAndUpdate({ _id: req.params.id, user: req.userAuth._id }, { $set: {  ...note } }, { new: true })
    .then(note => res.json({ note }))
    .catch(err => res.status(400).json({ error: err }));
});

router.get('/:id', userAuthenticate, (req, res) => {
  Note.findOne({ _id: req.params.id, user: req.userAuth._id })
    .then(note => res.json({ note }))
    .catch(err => res.status(400).json({ error: err }))
});

router.delete('/:id', userAuthenticate, (req, res) => {
  Note.findOneAndRemove({ _id: req.params.id, user: req.userAuth._id })
    .then(note => res.json({ note }))
    .catch(err => res.status(400).json({ error: err }))
});

router.get('/:id/public', (req, res) => {
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
