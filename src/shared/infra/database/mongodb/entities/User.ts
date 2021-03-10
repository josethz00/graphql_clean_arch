import mongoose, { Schema } from 'mongoose';


interface IUser extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
};

const UserSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastSeenAt: {
    type: String,
    required: true,
    default: new Date().toISOString()
  },
  createdAt: {
    type: String,
    required: true,
    default: new Date().toISOString()
  }
});

export { IUser };

export const User = mongoose.model<IUser>('User', UserSchema);
