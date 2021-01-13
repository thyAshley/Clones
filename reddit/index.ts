import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import app from "./src/server";

import { createConnection } from "typeorm";

app.listen(3000, async () => {
  console.log(`✔ Server started on port 3000`);
  try {
    await createConnection();
    console.log("✔ Database connected");
  } catch (error) {
    console.log(error);
  }
});
