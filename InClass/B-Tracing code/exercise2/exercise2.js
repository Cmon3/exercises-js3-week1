const removeVowels = (word) => {
  const characters = word.split("");

  const result = [];

  characters.forEach((character) => {
    if (
      character.toLowerCase() === "a" ||
      character.toLowerCase() === "o" ||
      character.toLowerCase() === "i" ||
      character.toLowerCase() === "e" ||
      character.toLowerCase() === "u"
    ) {
      result.push("_");
    } else {
      result.push(character);
    }
  });

  return result.join("");
}

const removeVowelsForWords = (words) => {
  const result = words.map((word) => removeVowels(word));
  return result;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
  var result = removeVowels('samuel');
  console.log("result: ", result);


/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/

const input = ["Irina", "Etza", "Daniel"];
console.log(removeVowelsForWords(input));

