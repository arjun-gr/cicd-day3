import { describe, test, expect } from "@jest/globals";
import request from "supertest";
import app from "../app";

describe("GET /api/test", () => {
  test("It should respond with a 200 status and correct JSON", async () => {
    const response = await request(app)
      .get("/api/test")
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ msg: "Hello world" });
  });
});
