import axios from 'axios';

export default {
  user: {
    login: credentials => axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user => axios.post('/api/users', { user }).then(res => res.data.user),
    fetchCurrent: () => axios.get('/api/auth').then(res => res.data.user)
  },
  note: {
    create: note => axios.post('/api/notes', { note }).then(res => res.data.note),
    remove: note => axios.delete(`/api/notes/${note}`).then(res => res.data),
    update: note => axios.put(`/api/notes/${note._id}`, { note }).then(res => res.data),
    fetch: note => axios.get(`/api/notes/${note}`).then(res => res.data.note),
    fetchPublic: note => axios.get(`/api/notes/${note}/public`).then(res => res.data.note),
    fetchAll: () => axios.get('/api/notes?archive=false').then(res => res.data.notes),
    fetchAllArchive: () => axios.get('/api/notes?archive=true').then(res => res.data.notes)
  },
  log: {
    fetchAll: () => axios.get('/api/logs').then(res => res.data.logs)
  }
};
