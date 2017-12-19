import jwt from 'jsonwebtoken';
import User from '../model/User';
import env from '../env';

export default (req, res, next) => {
  const header = req.headers.authorization;
  let token;
  if (header) token = header.split(' ')[1];
  if (token) {
    jwt.verify(token, env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(401).json({ error: 'Token invalid' });
      else {
        User.findOne({ email: decoded.email }).then(user => {
          req.userAuth = user;
          next();
        });
      }
    });
  } else {
    res.status(401).json({ error: 'Token not found' });
  }
};
