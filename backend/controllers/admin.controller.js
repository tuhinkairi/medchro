import { User } from "../models/user.model.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { generateToken } from "../utils/generateToken.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { comparePassword } from "../utils/generateToken.js";
import { Notification } from "../models/notification.model.js";

export const createAdmin = catchAsyncErrors(async (req, res, next) => {
  //console.log(req.body);
  //let avatarUrl = null;
  const { fullName, username, email, gender, password } = req.body;
  //console.log(req.body);

  // Check for missing fields
  if (!fullName || !username || !email || !gender || !password) {
    return next(new ErrorHandler("Please provide all the details", 401));
  }

  // Check if the user already exists
  const existedUser = await User.findOne({ email: email });
  if (existedUser) {
    return next(
      new ErrorHandler("Admin already exists with these credentials", 402)
    );
  }
  //heyyyyyy
  // Create the user
  const admin = await User.create({
    fullName,
    gender,
    email,
    role: "Admin",
    password,
    username,
  });
  //console.log(res);

  generateToken(admin, "Admin Created Successfully", 201, res);
});

export const loginAdmin = catchAsyncErrors(async (req, res) => {
  console.log(req.body);

  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return next(new ErrorHandler("Please provide all the details", 401));
  }

  if (password != confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 402));
  }

  const existedUser = await User.findOne({ email });
  console.log(existedUser);

  if (!existedUser) {
    return new ErrorHandler("No Admin exists with this Credintials", 402);
  }
  if (existedUser.role != "Admin") {
    return new ErrorHandler("No Admin with this credentials exists", 403);
  }
  const response = await comparePassword(existedUser, password);
  console.log(response);

  if (response) {
    generateToken(existedUser, "Admin Logged in Sucessfully", 202, res);
  } else {
    return new ErrorHandler("Passwords didn't match,Please try again!!");
  }
});

export const getAdminDetails = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  try {
    const user = User.findById({ id });
    res.status(201).json({
      success: true,
      message: "Admin Details fetched Successfully",
      user,
    });
  } catch (error) {
    return new ErrorHandler(`Error while fetching User Details: ${error}`, 502);
  }
});

export const logoutAdmin = catchAsyncErrors(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        adminToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res.status(200).clearCookie("adminToken", options).json({
    success: true,
    message: "Admin Logged out successfully",
    clearLocalStorage: true,
  });
});

export const updateAdmin = catchAsyncErrors(async (req, res, next) => {
  //console.log(req.user._id);
  //console.log(req.user);

  const userVerified = req.user;
  //console.log(userVerified);

  const id = userVerified._id;
  //console.log(id);

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Admin details updated successfully",
    user,
  });
});

export const deleteAdmin = catchAsyncErrors(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const deleted = await User.findByIdAndDelete(user._id);
    if (!deleted) {
      return new ErrorHandler("The Admin didn't get deleted", 501);
    }
    return res.status(200).json({
      success: true,
      message: "Admin Deleted Sucessfully",
      clearLocalStorage: true,
    });
  } catch (error) {
    return new ErrorHandler("Error While deleting Admin: ", error);
  }
});

export const getAllUsers = catchAsyncErrors(async (req, res) => {
  try {
    const users = await User.find({ role: "User" });
    res.status(200).json({
      success: true,
      messsage: "All Users fetched successfully",
      users,
    });
  } catch (error) {
    return new ErrorHandler("Error while fetching all the Users: ", error);
  }
});

export const getAllNotifications = catchAsyncErrors(async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json({
      success: true,
      messsage: "All Notifications fetched successfully",
      notifications,
    });
  } catch (error) {
    return new ErrorHandler(
      "Error while fetching all the Notifications: ",
      error
    );
  }
});
