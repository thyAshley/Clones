import request from "supertest";
import { createConnection } from "typeorm";

import { User } from "../../entity/User";
import app from "../../server";
import { dummyUser } from "../__test__/constants";

beforeAll(async () => {
  await (await createConnection()).synchronize(true);
});

describe("Test Authentication Routes", () => {
  it("should return true", async () => {
    await request(app).post("/api/v1/auth").send(dummyUser);
    const response = await request(app).post("/api/v1/auth").send(dummyUser);
    console.log(await User.find());
  });
});
