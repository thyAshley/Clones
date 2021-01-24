import multer from "multer";
import path from "path";
import { makeId } from "../util/helpers";

export const uploadMiddleware = multer({
  storage: multer.diskStorage({
    destination: "public/images",
    filename: (_, file, cb) => {
      const name = makeId(20);
      cb(null, name + path.extname(file.originalname));
    },
  }),
  fileFilter: (_, file, cb) => {
    if (["image/jpeg", "image/png"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("File is not an image"));
    }
  },
});
