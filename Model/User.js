import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  emailisVerified: {
    type: Boolean,
  },
  bio: {
    type: String,
  },
});
const User = mongoose.model("users", UserSchema);
export default User;
