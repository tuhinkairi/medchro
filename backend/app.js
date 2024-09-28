import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
const app = new express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URI, process.env.PRODUCTION_URI],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.resolve("public")));

export default app;
