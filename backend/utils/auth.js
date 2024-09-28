import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/user.model.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

const verifyUser = async (req, _, next) => {
  //console.log(req.headers);

  try {
    const token =
      req.headers.cookie
        ?.split(";")
        .find((cookie) => cookie.trim().startsWith("UserToken="))
        ?.split("=")[1] || req.header("Authorization")?.replace("Bearer ", "");

    console.log(token);

    if (!token) {
      return next(new ErrorHandler("Unauthorized request", 401));
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      //console.log(decodedToken);

      const user = await User.findById(decodedToken?.id).select("-password");

      if (!user) {
        return next(new ErrorHandler("Invalid Access Token", 402));
      }

      req.user = user;

      next();
    } catch (verifyError) {
      return next(
        new ErrorHandler(
          `Token verification failed: ${verifyError.message}`,
          401
        )
      );
    }
  } catch (error) {
    return next(
      new ErrorHandler(error?.message || "Invalid message token", 401)
    );
  }
};

const verifyAdmin = async (req, _, next) => {
  try {
    console.log(req.headers.cookie);
    console.log(req.headers);

    const token =
      req.headers.cookie
        ?.split(";")
        .find((cookie) => cookie.trim().startsWith("UserToken="))
        ?.split("=")[1] ||
      req.header("Authorization")?.replace("Bearer ", "") ||
      localStorage.getItem("AdminToken");

    //console.log(token);
    //console.log(token);

    if (!token) {
      return next(new ErrorHandler("Unauthorized request", 401));
    }

    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(decodedToken);

      const user = await User.findById(decodedToken?.id).select("-password");

      if (!user) {
        return next(new ErrorHandler("Invalid Access Token", 402));
      }

      req.user = user;
      next();
    } catch (verifyError) {
      return next(
        new ErrorHandler(
          `Token verification failed: ${verifyError.message}`,
          401
        )
      );
    }
  } catch (error) {
    throw next(
      new ErrorHandler(error?.message || "Invalid message token", 401)
    );
  }
};

export { verifyUser, verifyAdmin };
