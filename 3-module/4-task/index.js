const showSalary = (users, age) => users
  .filter(({ age: userAge }) => userAge <= age)
  .map(({ name, balance }) => `${name}, ${balance}`)
  .join('\n');
