class ErrorHandler extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  //console.log(err);

  err.message = err.message || "Internal Server Error";
  err.statuscode = err.statuscode || 500; // Default to 500 for internal server errors

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "JsonWebTokenError") {
    const message = `Invalid JSON Web Token, please try again later`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "TokenExpiredError") {
    const message = `JSON Web Token has expired, please try again later`;
    err = new ErrorHandler(message, 400);
  }

  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Handle general MongoDB errors with detailed messages
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  res.status(err.statuscode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
