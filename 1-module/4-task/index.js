// Решение без регулярных выражений
function checkSpam(str) {
  const spamPatterns = ['1xBet', 'XXX'];
  const strInLowerCase = str.toLowerCase();
  return spamPatterns
    .some((pattern) => strInLowerCase.includes(pattern.toLowerCase()));
}

/* Решение с использованием регулярных выражений
function checkSpam(str) {
  const spamPatterns = [/1xBet/i, /XXX/i];
  return spamPatterns.some((pattern) => pattern.test(str));
}
*/
