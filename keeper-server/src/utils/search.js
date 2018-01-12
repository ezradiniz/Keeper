import Fuse from 'fuse.js';

var options = {
  shouldSort: true,
  keys: [
    'subject',
    'body.blocks.text'
  ]
};

export default function(query, notes) {
  /*
   * TODO: Refactoring later
   */
  const notesList = notes.map(n => { return { ...n, body: JSON.parse(n.body) } });
  const fuse = new Fuse(notesList, options);
  return fuse.search(query).map(n => { return { ...n, body: JSON.stringify(n.body) } });
};
