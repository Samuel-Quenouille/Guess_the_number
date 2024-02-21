import { prompt } from "./prompt.js";

// Présentation du jeu
console.log(
  `Bienvenue à GUESS THE NUMBER ! 🕹️ \nTon but est simple : deviner le nombre avec le moins d'essais possible ! \nLe nombre d'essais est illimité. \nBonne chance à toi !`
);

// On va générer un nombre aléatoire entre 0 et 100 qu'on va appeler targetNumber
const min = 0;
const max = 100;

const generateRandomNumber = (min, max) => {
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};

const targetNumber = generateRandomNumber(min, max);

// Si le nombre n'est pas valide, il informe qu'il faut rentrer un nombre entre 0 et 100
const validateNumberOfUser = (userNumber) => {
  if (Number.isNaN(userNumber) || Math.abs(userNumber) > 100) {
    console.log("🔴 Il faut rentrer un nombre entre 0 et 100");
    return false;
  }
  return true;
};

// On va demander à l'utilisateur de rentrer un nombre
const promptNumber = (message) => {
  let userNumber = Number(prompt(message));

  if (!validateNumberOfUser(userNumber)) {
    return promptNumber(message);
  }

  return userNumber;
};

// Si le nombre est plus petit, il va informer que le nombre targetNumber est plus grand
// Si le nombre est trop grand, il va informer que le nombre targetNumber est plus petit
// Si c'est le bon nombre : fin de la partie ! (affiche le nombre d'essais).
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
  attempts++; // Il faut compter le nombre d'essais de l'utilisateur.
  compareNumbers(userNumber, targetNumber, attempts);
};

compareNumbers(promptNumber("\nEntre ton nombre : "), targetNumber, 1);
