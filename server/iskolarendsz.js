const database = require("./database.json");
const readline = require("readline");
const axios = require("axios");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const authQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question("mi az ID szamja? ", async (answer) => {
      const response = await axios.get(`http://localhost:3000/ ${answer}`);
      console.log(response.data);
      if (response.data === "failed") {
        reject();
      }
      resolve(response.data.teacher);
    });
  });
};
const valtoztatas = (answer) => {
  return new Promise((resolve, reject) => {
    rl.question("szeretne e valtoztatni ? ", async (answer) => {
      if (answer === "igen") {
        console.log(database);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
const changeStudent = (answer) => {
  return new Promise((resolve, reject) => {
    rl.question(
      "irja be az ID-t aminek a nevet megvaltoztatjuk ",
      async (answer) => {
        for (let i = 0; i < database.length; i++) {
          if (database[i].id == answer) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
        //const response = await axios.put(`http://localhost:3000/`, {});
      }
    );
  });
};

const studentQuestion = (answer) => {
  return new Promise((resolve, reject) => {
    rl.question("van e uj diak? ", async (answer) => {
      if (answer === "igen") {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

const newstudentQuestion = (answer) => {
  return new Promise((resolve, reject) => {
    rl.question("irja be a  diak nevet ? ", async (answer) => {
      const response = await axios.post(`http://localhost:3000/`, {
        name: answer,
        teacher: false,
        id: Math.floor(1000 + Math.random() * 9000),
      });
      if (response.data === "success") {
        resolve();
      } else {
        reject();
      }
    });
  });
};
async function main() {
  const teacher = await authQuestion();
  if (teacher) {
    const valtoztat = await valtoztatas();
    if (valtoztat) {
      const change = await changeStudent();
      if (change) {
      }
    }
  }

  rl.close();
}

main();
