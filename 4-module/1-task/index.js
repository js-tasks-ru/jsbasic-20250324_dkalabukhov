function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  ul.innerHTML = friends
    .map(({ firstName, lastName }) => `<li>${firstName} ${lastName}</li>`)
    .join('');

  return ul;
}
