function makeDiagonalRed(table) {
  Array.from(table.rows).forEach((row, rowIndex) => {
    row.cells[rowIndex].style.backgroundColor = 'red';
  });
}
