const express = require("express");
const app = express();
const adatbazis = require("./adatbazis.json");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const fs = require("fs");

app.post("/", (req, res, next) => {
  const user = req.body;
  user.id = Math.floor(1000 + Math.random() * 9000);

  if (user) {
    adatbazis.push(user);
    fs.writeFile("adatbazis.json", JSON.stringify(adatbazis), (err) => {
      if (err) {
        console.log("jaj de rossz nem mukodik ");
      }
      console.log("sikerult hozza adva", adatbazis);
      res.send("success");
    });
  }
});

app.set("port", process.env.PORT || 3000);
//`http://localhost:3000/${answer}`
//app.get("/:id", (req, res, next) => {

app.get("/:id", (req, res, next) => {
  const user = adatbazis.find(
    (person) => person.id === parseInt(req.params.id)
  );
  res.send(user);
});
app.get("/", (req, res, next) => {
  res.send(adatbazis);
});

app.listen(app.get("port"), () => {
  console.info(`Server listen on port ${app.get("port")}`);
});
