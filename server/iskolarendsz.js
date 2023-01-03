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
    const newstudent = await studentQuestion();
    if (newstudent) {
      await newstudentQuestion();
    }
  }

  rl.close();
}

main();
