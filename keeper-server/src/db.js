import mongoose from 'mongoose';
import env from './env';

mongoose.Promise = global.Promise;
mongoose.connect(env.MONGODB_URL, { useMongoClient: true });

export default mongoose;
