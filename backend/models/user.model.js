import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "Full Name must be of three Characters atleast"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [3, "Full Name must be of three Characters atleast"],
    },
    age: {
      type: Number,
      required: true,
      minlength: [validator.isNumeric, "Age should be a numeric value"],
    },
    dob: {
      type: String,
      required: true,
      minlength: [2, "Date of Birth should be Valid"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Others"],
    },
    email: {
      type: String,
      required: true,
      validator: [validator.isEmail, "Please provide an valid Email Address"],
    },
    role: {
      type: String,
      required: true,
      enum: ["User", "Admin"],
    },
    password: {
      type: String,
      required: true,
      validator: [
        validator.isStrongPassword,
        "Please provide an Strong Password",
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
    } catch (error) {
      return next(error);
    }
  }
  next();
});
export const User = mongoose.model("User", userSchema);
