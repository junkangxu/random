import localStorageName from './common';

function formatValue(t, v) {
  return {type: t, value: v};
}

export let setLocalStorage = (name, value) => localStorage.setItem(name, value);

export let removeLocalStorage = (name) => localStorage.removeItem(name);

export let checkLocalStorage = (name) => getLocalStorage(name) !== null ? true : false;

export let addToLocalStorage = (type, value) => {
  let arr = getLocalStorage(localStorageName);
  if (!checkLocalStorage(localStorageName)) arr = [];
  if (arr.length !== 0) arr = JSON.parse(arr);
  if (arr.length >= 20) arr.pop();
  arr.unshift(formatValue(type, value));
  let retVal = JSON.stringify(arr);
  setLocalStorage(localStorageName, retVal);
};

let getLocalStorage = (name) => localStorage.getItem(name);

export default getLocalStorage;
