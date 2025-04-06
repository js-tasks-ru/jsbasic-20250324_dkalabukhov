const getMinMax = (str) => str
  .split(' ')
  .map((elem) => parseFloat(elem))
  .filter((elem) => !Number.isNaN(elem))
  .reduce((acc, num) => {
    if (num > acc.max) {
      acc.max = num;
    }

    if (num < acc.min) {
      acc.min = num;
    }

    return acc;
  }, { min: Infinity, max: -Infinity });
