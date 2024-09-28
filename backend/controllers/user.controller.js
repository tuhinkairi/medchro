import { User } from "../models/user.model.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { generateToken } from "../utils/generateToken.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { comparePassword } from "../utils/generateToken.js";

import cloudinary from "cloudinary";

export const createUser = catchAsyncErrors(async (req, res, next) => {
  // let avatarUrl = null;
  const { firstName, lastName, age, dob, gender, email, password } = req.body;
  //console.log(req.body);

  // Check for missing fields
  if (
    !firstName ||
    !lastName ||
    !age ||
    !dob ||
    !gender ||
    !email ||
    !password
  ) {
    return next(new ErrorHandler("Please provide all the details", 401));
  }

  // Check if the user already exists
  const existedUser = await User.findOne({ email: email });
  if (existedUser) {
    return next(
      new ErrorHandler("User already exists with these credentials", 402)
    );
  }
  //console.log(req.file);

  // Handle avatar upload if present
  // if (req.file) {
  //   const avatar = req.file;
  //   const allowedFormats = [
  //     "image/png",
  //     "image/jpg",
  //     "image/jpeg",
  //     "image/webp",
  //   ];

  //   if (!allowedFormats.includes(avatar.mimetype)) {
  //     return next(new ErrorHandler("File format not supported"));
  //   }

  //   try {
  //     // Upload to Cloudinary

  //     const cloudinaryResponse = await cloudinary.uploader.upload(avatar.path);

  //     if (!cloudinaryResponse) {
  //       return next(
  //         new ErrorHandler("Error While uploading to Cloudinary", 500)
  //       );
  //     }

  //     if (cloudinaryResponse && !cloudinaryResponse.error) {
  //       avatarUrl = {
  //         public_id: cloudinaryResponse.public_id,
  //         url: cloudinaryResponse.secure_url,
  //       };
  //     } else {
  //       console.error(
  //         "Cloudinary Error: ",
  //         cloudinaryResponse.error || "Unknown Cloudinary error"
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error uploading to Cloudinary: ", error);
  //     return next(new ErrorHandler("Error uploading avatar image", 500));
  //   }
  // }

  // Create the user
  const user = await User.create({
    firstName,
    lastName,
    age,
    dob,
    gender,
    email,
    role: "User",
    password,
  });

  // Generate token and respond
  generateToken(user, "User Created Successfully", 201, res);
});

export const loginUser = async (req, res, next) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please provide all the details", 401));
  }

  const existedUser = await User.findOne({ email });
  if (!existedUser) {
    return next(new ErrorHandler("No User exists with this Credintials", 402));
  }
  if (existedUser.role != "User") {
    return next(new ErrorHandler("No User with this credentials exists", 403));
  }
  console.log(existedUser.password);
  console.log(password);

  const response = await comparePassword(existedUser, password);
  console.log(response);

  if (response) {
    generateToken(existedUser, "User Logged in Sucessfully", 202, res);
  } else {
    return next(new ErrorHandler("Passwords didn't match,Please try again!!"));
  }
};

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  try {
    console.log(req.user);
    //console.log(req);

    const user = req.user;
    console.log(user);

    res.status(200).json({
      success: true,
      message: "User Details fetched Successfully",
      user,
    });
  } catch (error) {
    return next(
      new ErrorHandler(`Error while fetching User Details: ${error}`, 502)
    );
  }
});

export const logoutUser = catchAsyncErrors(async (req, res) => {
  // Clear the user token from the database
  await User.findByIdAndUpdate(
    req.user._id,
    { $set: { userToken: undefined } },
    { new: true }
  );

  // Clear the cookie
  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  return res.status(200).clearCookie("UserToken", options).json({
    success: true,
    message: "User Logged out successfully",
  });
});

export const updateUser = catchAsyncErrors(async (req, res, next) => {
  const userVerified = req.user;
  const id = userVerified._id;
  console.log(req.file);
  console.log(req);

  if (req.file) {
    const avatar = req.file;
    const allowedFormats = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/webp",
    ];

    if (!allowedFormats.includes(avatar.mimetype)) {
      return next(new ErrorHandler("File format not supported"));
    }

    try {
      // Upload to Cloudinary
      const cloudinaryResponse = await cloudinary.uploader.upload(avatar.path);

      if (cloudinaryResponse && !cloudinaryResponse.error) {
        req.body.avatar = {
          public_id: cloudinaryResponse.public_id,
          url: cloudinaryResponse.secure_url,
        };
      } else {
        console.error(
          "Cloudinary Error: ",
          cloudinaryResponse.error || "Unknown Cloudinary error"
        );
        return next(new ErrorHandler("Error uploading avatar image", 500));
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary: ", error);
      return next(new ErrorHandler("Error uploading avatar image", 500));
    }
  }

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "User details updated successfully",
    user,
  });
});

export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  try {
    // Find and delete the user
    const user = await User.findById(req.user._id);
    await User.findByIdAndUpdate(
      req.user._id,
      { $set: { userToken: undefined } },
      { new: true }
    );
    const deleted = await User.findByIdAndDelete(user._id);

    if (!deleted) {
      return next(new ErrorHandler("The User didn't get Deleted", 501));
    }

    return res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      clearLocalStorage: true, // Indicate client to clear localStorage
    });
  } catch (error) {
    return next(new ErrorHandler("Error while deleting User: ", error));
  }
});
