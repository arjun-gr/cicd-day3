import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.status(200).json({ msg: "Hello world" });
});

export default app;
