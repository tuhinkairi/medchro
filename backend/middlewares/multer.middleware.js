import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp"); //cb=callback
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // cb(null, file.fieldname + '-' + uniqueSuffix);  this is a good practice mostly..when the project will be done..we can experiment with these
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});
