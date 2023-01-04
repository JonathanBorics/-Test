const axios = require("axios");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const authQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question("mi az ID szamja? ", async (answer) => {
      const response = await axios.get(`http://localhost:3000/${answer}`);
      console.log("HII", response.data);
      resolve();
    });
  });
};
const newUser = () => {
  return new Promise((resolve, reject) => {
    rl.question("ki az uj tag ? ", async (answer) => {
      const response = await axios.post(`http://localhost:3000`, {
        name: answer,
      });

      resolve();
    });
  });
};
const changeUser = () => {
  return new Promise((resolve, reject) => {
    rl.question("kinek a nevet szeretne megvaltoztatni  ? ", async (answer) => {
      const response = await axios.get(`http://localhost:3000`, {
        name: answer,
      });

      resolve();
    });
  });
};
async function main() {
  //await authQuestion();
  //await newUser();
  await changeUser();

  rl.close();
}

main();
