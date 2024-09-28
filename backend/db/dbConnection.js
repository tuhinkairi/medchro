import mongoose from "mongoose";
import "dotenv/config";

const dbConnection = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "SageAI",
    })
    .then(() => {
      console.log("Server Connected to Database!!");
    })
    .catch((err) => {
      console.log("Error while Conncting to Database: ", err);
    });

export { dbConnection };
