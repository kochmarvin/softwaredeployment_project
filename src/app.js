import express from "express";

const app = express();

express.json();

app.get("/", (req, res) => {
  res.send({
    message: "API alive, environment is working",
  });
});

app.get("/hello", (req, res) => {
  res.send({
    message: "Greetings mister unkwon",
  });
});

app.get("/world", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

app.get("/max", (req, res) => {
  res.send({
    message: "Max",
  });
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;
