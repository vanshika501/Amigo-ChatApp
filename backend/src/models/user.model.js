import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    // for group management
    groups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group", // refers to Group model
      },
    ],
    // end
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
