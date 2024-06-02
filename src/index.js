const { app } = require("./app");
require("dotenv").config();
const { PORT } = process.env;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/service", (req, res) => {
  res.render("service");
});

app.listen(PORT);
