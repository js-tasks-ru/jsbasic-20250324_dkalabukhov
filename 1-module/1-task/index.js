// Решение при помощи цикла
function factorial(n) {
  if (typeof n !== 'number') {
    throw new Error('Факториал может вычисляться только для чисел');
  }
  if (n < 0 ) {
    throw new Error('Факториал не может быть отрицательным числом');
  }
  if (Math.round(n) !== n) {
    throw new Error('Факториал не может быть дробным числом');
  }

  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

/* Рекурсивное решение:
const factorial = (n) => {
  if (typeof n !== 'number') {
    throw new Error('Факториал может вычисляться только для чисел');
  }
  if (n < 0 ) {
    throw new Error('Факториал не может быть отрицательным числом');
  }
  if (Math.round(n) !== n) {
    throw new Error('Факториал не может быть дробным числом');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
*/
