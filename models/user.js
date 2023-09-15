const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    isVerified: {
      type: Boolean,
      default: false, // Initially, users are not verified
    },
    verificationToken: String,
    phoneNumber: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);