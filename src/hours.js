function calcHours() {
  const weeks = +prompt('Number of weeks taking CS50: ', 0);
  const hours = [];

  for (let i = 0; i < weeks; i++) {
    hours[i] = +prompt(`Week ${i} HW Hours:`);
  }
  const total = hours.reduce((acc, cur) => acc + cur, 0);
  const average = Math.round(total / hours.length);

  const request = prompt(
    'Enter T for total hours, A for average hours per week:'
  );

  return request.toUpperCase() === 'A' ? average : total;
}
