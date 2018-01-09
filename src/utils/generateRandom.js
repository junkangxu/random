const charactersBoth = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const characterLower = "abcdefghijklmnopqrstuvwxyz";

const wanList = Array(9).fill("wan");
const tongList = Array(9).fill("tong");
const tiaoList = Array(9).fill("tiao");
const mahjongList = wanList.concat(tongList).concat(tiaoList);

const chineseNumberCoverter = ['有问题', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const chineseOtherConverter = ['有问题', '东风', '南风', '西风', '北风', '红中', '白板', '发财'];

const dayOfMonthNormal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayOfMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(year) {
  let divisibleBy4 = year % 4 === 0;
  let notDivisibleBy100 = year % 100 !== 0;
  if (divisibleBy4 && notDivisibleBy100) {
    return true;
  } else {
    return false;
  }
}

function timeToString(num) {
  if (num < 10) {
    return "0" + num.toString();
  } else {
    return num.toString();
  }
}

export function getRandomDate(startDate, endDate) {
  let millsecDiff = endDate - startDate;
  if (millsecDiff < 0) {
    return "";
  }
  let secDiff = millsecDiff / 1000;
  let minDiff = secDiff / 60;
  let hourDiff = minDiff / 60;
  let dayDiff = hourDiff / 24;
  let resultYear = startDate.getFullYear();
  let resultDay = startDate.getDate();
  let resultMonth = startDate.getMonth();
  let randomInt = getRandomInt(0, dayDiff);
  let dayOfMonth;
  if (isLeapYear(resultYear)) {
    dayOfMonth = dayOfMonthLeap;
  } else {
    dayOfMonth = dayOfMonthNormal;
  }
  resultDay += randomInt;
  while (resultDay > dayOfMonth[resultMonth]) {
    resultDay -= dayOfMonth[resultMonth];
    resultMonth += 1;
  }
  resultMonth++;
  return resultYear + "-" + timeToString(resultMonth) + "-"
    + timeToString(resultDay);
}

export function getRandomTime(startTime, endTime) {
  let millsecDiff = endTime - startTime;
  if (millsecDiff < 0) {
    return "";
  }
  let secDiff = millsecDiff / 1000;
  let minDiff = secDiff / 60;
  let randomInt = getRandomInt(0, minDiff);
  console.log(randomInt);
  let startTimeMin = startTime.getMinutes();
  let startTimeHour = startTime.getHours();
  let resultMin = startTimeMin;
  let resultHour = startTimeHour;
  while (randomInt >= 60) {
    resultHour += 1;
    randomInt -= 60;
  }

  resultMin += randomInt

  while (resultMin >= 60) {
    resultHour += 1;
    resultMin -= 60;
  }

  resultMin = timeToString(resultMin);
  resultHour = timeToString(resultHour);

  return resultHour + ":" + resultMin;
}

export function getRandomMahjong() {
  const maxNum = 34;
  let randomInt = getRandomInt(0, maxNum);
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

function getRandomCharacterHelper(str) {
  return str.charAt(Math.floor(Math.random() * str.length));
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
