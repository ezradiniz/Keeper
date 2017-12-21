import axios from 'axios';

export default {
  user: {
    login: credentials => axios.post('/api/auth', { credentials }).then(res => res.data.user),
    signup: user => axios.post('/api/users', { user }).then(res => res.data.user),
    fetchCurrent: () => axios.get('/api/auth').then(res => res.data.user)
  },
  note: {
    create: note => axios.post('api/notes', { note }).then(res => res.data.note),
    fetchAll: () => axios.get('api/notes').then(res => res.data.notes),
    fetchPublic: note => axios.get(`/api/notes/public/${note}`).then(res => res.data.note)
  }
};
