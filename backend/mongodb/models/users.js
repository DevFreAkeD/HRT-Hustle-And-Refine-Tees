import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: false },
  address: {
    line1: { type: String, required: false },
    line2: { type: String, required: false },
    town: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    pincode: { type: String, required: false },
  },
  emailVerified: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

export default User;