import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import app from "./src/server";

import { createConnection } from "typeorm";

app.listen(process.env.PORT, async () => {
  console.log(`✔ Server started on port ${process.env.PORT}`);
  try {
    await createConnection();
    console.log("✔ Database connected");
  } catch (error) {
    console.log(error);
  }
});
