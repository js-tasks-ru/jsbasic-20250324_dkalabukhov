const camelize = (str) => str
  .split('-')
  .map((property, index) => index === 0
    ? property
    : property[0].toUpperCase() + property.slice(1))
  .join('');
