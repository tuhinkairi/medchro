import jwt from "jsonwebtoken";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import bcrypt from "bcrypt";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const generateToken = async (user, message, statuscode, res) => {
  //console.log(res);
  //console.log(message);
  //console.log(user);

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRES }
  );
  //console.log(token);

  const cookieName = user.role == "Admin" ? "AdminToken" : "UserToken";

  if (typeof window !== "undefined") {
    localStorage.setItem(cookieName, token);
  }

  res
    .status(statuscode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      HttpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

export const comparePassword = async (user, enteredPassword) => {
  try {
    const result = await bcrypt.compare(enteredPassword, user.password);
    return result;
  } catch (error) {
    return new ErrorHandler(`Error Comapring Passwords: ${error}`, 502);
  }
};
