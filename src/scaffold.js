var fs = require('fs-extra')

var dir = '/src/lib'
fs.ensureDir(dir, function (err) {
  console.log(err) // => null
  // dir has now been created, including the directory it is to be placed in
});
