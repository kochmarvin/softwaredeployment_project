import request from "supertest";

import app from "./app";

describe("GET /", () => {
  it("should return a 200 status and the correct JSON response", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "API alive, environment is working",
    });
  });
});
