function updateRowByStatus(row, statusCell) {
  if (!statusCell.hasAttribute('data-available')) {
    row.hidden = true;
    return;
  }

  switch(statusCell.dataset.available) {
    case 'true':
      row.classList.add('available');
      break;
    case 'false':
      row.classList.add('unavailable');
      break;
  }
}

function highlight(table) {
  const rows = Array.from(table.querySelector('tbody').querySelectorAll('tr'));
  rows.forEach((row) => {
    const { cells: [, ageCell, genderCell, statusCell] } = row;

    updateRowByStatus(row, statusCell);

    if (genderCell.textContent === 'm') {
      row.classList.add('male');
    }

    if (genderCell.textContent === 'f') {
      row.classList.add('female');
    }

    if (Number(ageCell.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
