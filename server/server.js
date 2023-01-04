const express = require("express");
const app = express();
const database = require("./database.json");
const fs = require("fs");
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res, next) => {
  res.send(
    "<div><h1>udv az iskolai  szerveren <h1> <h2> GET - /ID: - megkapunk egy diakot vagy tanart  </h2></div>"
  );
});
app.get("/:id", (req, res, next) => {
  const user = database.find((person) => person.id === parseInt(req.params.id));
  if (user) {
    res.send(user);
    return;
  }
  res.send("faild");
});
app.put("/", (req, res, next) => {
  const user = req.body;
  if (user) {
    database.map(user);
    fs.writeFile("database.json", JSON.stringify(database), (err) => {
      if (err) {
        console.log("jaj de rossz nem mukodik ");
      }
      console.log("sikerult hozza adva", database);
      res.send("success");
    });
  }
});

app.post("/", (req, res, next) => {
  const user = req.body;
  if (user) {
    database.push(user);
    fs.writeFile("database.json", JSON.stringify(database), (err) => {
      if (err) {
        console.log("jaj de rossz nem mukodik ");
      }
      console.log("sikerult hozza adva", database);
      res.send("success");
    });
  }
});

app.listen(app.get("port"), () => {
  console.info(`Server listen on port ${app.get("port")}`);
});
