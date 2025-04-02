/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
// Решение без регулярного выражения
const isValid = (name) => Boolean(name) && !name.includes(' ') && name.length >= 4;

/* Решение при помощи регулярного выражения
const isValid = (name) => typeof name === 'string' && /^\S{4,}$/.test(name);
*/

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
