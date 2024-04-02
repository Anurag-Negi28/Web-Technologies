function capitalizeFirstLetterOfEachWord(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

console.log(capitalizeFirstLetterOfEachWord("hello world"));
