const charactersBoth = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characterLower = "abcdefghijklmnopqrstuvwxyz";

const wanList = Array(9).fill("wan");
const tongList = Array(9).fill("tong");
const tiaoList = Array(9).fill("tiao");
const mahjongList = wanList.concat(tongList).concat(tiaoList);

const chineseNumberCoverter = ['有问题', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const chineseOtherConverter = ['有问题', '东风', '南风', '西风', '北风', '红中', '白板', '发财'];

function getRandomCharacterHelper(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
}

export function getRandomMahjong() {
  const maxNum = 34;
  let randomInt = getRandomInt(0, 34);
  let randomNumber = getRandomInt(1, 9);
  let randomOther = getRandomInt(1, 7);
  let type = mahjongList[randomInt];
  switch (type) {
    case "wan":
      return chineseNumberCoverter[randomNumber] + "万";
    case "tong":
      return chineseNumberCoverter[randomNumber] + "筒";
    case "tiao":
      return chineseNumberCoverter[randomNumber] + "条";
    default:
      return chineseOtherConverter[randomOther];
  }
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
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

export default function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
