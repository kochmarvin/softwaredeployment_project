import express from "express";

const app = express();

express.json();

app.get("/", (req, res) => {
  res.send({
    message: "API alive, environment is working",
  });
});

app.get("/production", (req, res) => {
  res.send({
    message: "This is a production route.",
  });
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
