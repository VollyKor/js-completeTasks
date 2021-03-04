function CaesarCipher(str, num) {
  // code goes here
  const alpabet = "abcdefghijklmnopqrstuvwxyz";
  const alpabetArray = alpabet.split("");
  const strArray = str.split("");

  const newStr = strArray.reduce((acc, e, i) => {
    let letterCase = "lower";

    if (e === " ") {
      return acc + " ";
    }

    if (e === e.toUpperCase()) {
      e = e.toLowerCase();
      letterCase = "upper";
    }

    if (alpabet.includes(e)) {
      let nextIndex = alpabet.indexOf(e) + num;
      if (nextIndex >= alpabetArray.length) {
        nextIndex = alpabet.indexOf(e) + num - alpabetArray.length;
      }

      if (letterCase === "upper") {
        const nextLetter = alpabetArray[nextIndex].toUpperCase();
        return (acc += nextLetter);
      }

      acc += alpabetArray[nextIndex];
    }

    return acc;
  }, "");

  return newStr;
}

// keep this function call here
console.log(CaesarCipher("CDe zXc", 1));

const contacts = function methodName(contacts) {
  return contacts.sort((a, b) =>
    a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
  );
};
