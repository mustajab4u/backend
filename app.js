const fs = require('fs');
const http = require('http');

let serverText = null;

const app = http.createServer((req, res) => res.end(serverText));

app.listen(3000, () => console.log(`1. App Listening on http://localhost:3000`));

fs.writeFile(
  './serverText.txt',
  'Hello From the Server Side 💥',
  { encoding: 'utf-8' },
  () => console.log('2. File Have Been Written!'),
);

fs.readFile('./serverText.txt', { encoding: 'utf-8' }, (err, text) => {
  serverText = text;
  console.log(`3. ${serverText}`);
});

console.log(`4. ${serverText}`);
