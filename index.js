import { prompt } from "./prompt.js";

console.log(
  `Bienvenue à GUESS THE NUMBER ! 🕹️ \nTon but est simple : deviner le nombre avec le moins d'essais possible ! \nLe nombre d'essais est illimité. \nBonne chance à toi !`
);

const min = 0;
const max = 100;

const generateRandomNumber = (min, max) => {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};

const targetNumber = generateRandomNumber(min, max);

const validateNumberOfUser = (userNumber) => {
  if (Number.isNaN(userNumber) || Math.abs(userNumber) > 100) {
    console.log("🔴 Il faut rentrer un nombre entre 0 et 100");
    return false;
  }
  return true;
};

const promptNumber = (message) => {
  let userNumber = Number(prompt(message));

  if (!validateNumberOfUser(userNumber)) {
    return promptNumber(message);
  }

  return userNumber;
};

const compareNumbers = (userNumber, targetNumber, attempts) => {
  if (userNumber < targetNumber) {
    console.log("Le nombre à trouver est plus grand 📈");
  } else if (userNumber > targetNumber) {
    console.log("Le nombre à trouver est plus petit 📉");
  } else {
    console.log("🟢 Bravo tu as trouvé le bon nombre !");
    console.log(`🌟 Tu as réussi en ${attempts} tentatives`);
    return;
  }

  userNumber = promptNumber("\nEntre ton nombre : ");
  attempts++;
  compareNumbers(userNumber, targetNumber, attempts);
};

compareNumbers(promptNumber("\nEntre ton nombre : "), targetNumber, 1);
