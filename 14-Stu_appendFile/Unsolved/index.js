// TODO: What are we importing?
// We are importing the fs module
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// The first argument is the file that we are appending to
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // If there is an error, then console.error will log the error. If there is no error, then console.log will log 'Commit logged!'
  err ? console.error(err) : console.log('Commit logged!')
);
