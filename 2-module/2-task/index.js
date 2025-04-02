// Решение при помощи Object,keys;
// На мой взгляд, решение при помощи Object.keys лучше,
// т. к. цикл for in итерирует и свойства прототипа.

const isEmpty = (obj) => Object.keys(obj).length === 0;

/* Решение при помощи цикла
function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }

  return true;
}
*/
