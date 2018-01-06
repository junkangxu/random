const charactersBoth = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characterLower = "abcdefghijklmnopqrstuvwxyz";

function getRandomCharacterHelper(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomCharacter(type) {
  switch (type) {
    case "Both":
      return getRandomCharacterHelper(charactersBoth);
    case "onlyLower":
      return getRandomCharacterHelper(characterLower);
    case "onlyUpper":
      return getRandomCharacterHelper(characterUpper);
    default:
      return null;
  }
}
