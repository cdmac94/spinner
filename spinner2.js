let wheel = '|\\-/|\n'
let delay = 100

for (let line of wheel) {
  if (line > wheel.length) {
    process.stdout.write('\n')
  } else {
  setTimeout(() => {
    process.stdout.write('\r' + line + '   ');
  }, delay);
  delay += 200
  }
}