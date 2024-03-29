function makeMariosPyramid() {
  let height = 0;
  while (height < 1 || height > 8) {
    height = +prompt('Type height between 1 and 8: ');
  }
  const pyramid = [];
  for (let i = 0; i < height; i++) {
    let row = '';
    let mirror = '';

    for (let y = 0; y < height - i - 1; y++) {
      row = row + ' ';
    }

    for (let j = 0; j <= i; j++) {
      row += '#';
    }

    for (let x = row.length - 1; x >= 0; x--) {
      mirror += row[x];
    }

    const completedRow = row + '  ' + mirror;

    pyramid.push(completedRow);
  }
  return pyramid;
}

makeMariosPyramid();
