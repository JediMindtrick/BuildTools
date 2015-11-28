/*
This is meant to be a cross-platform utility script to copy files and directories from one
place to another.
arg1 = source
arg2 = destination
arg3 = glob pattern to filter on

see: https://github.com/jprichardson/node-fs-extra#copy
*/
//example usage; will copy all files EXCEPT .js or .md files into dist
//node cpr.js ../src ../dist '**/!(*.js|*.md)'
//

'use strict';

var fs = require('fs-extra');
var minimatch = require("minimatch");
var chalk = require('chalk');
var args = process.argv;
console.log('cpr.js:');
var matcher = function matcher() {};
if (args[4]) {
    console.log('glob pattern: ' + args[4]);
    matcher = function (filename) {
        var match = minimatch(filename, args[4]);
        var msg = 'copy ' + filename + ' -> ' + match;
        console.log(match ? msg : chalk.yellow(msg));
        return match;
    };
}

fs.copy(args[2], args[3], { filter: matcher }, function (err) {
    if (err) return console.error(err);
    console.log('cpr.js: success');
}); // copies directory, even if it has subdirectories or files
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUN0QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTtBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQ3RCLElBQUksT0FBTyxHQUFHLG1CQUFJLEVBQUUsQ0FBQTtBQUNwQixJQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQztBQUNQLFdBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDdkMsV0FBTyxHQUFHLFVBQUMsUUFBUSxFQUFHO0FBQ2xCLFlBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDMUMsWUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQy9DLGVBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDNUMsZUFBTyxLQUFLLENBQUE7S0FDZixDQUFBO0NBQ0o7O0FBRUQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzFELFFBQUksR0FBRyxFQUFFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNsQyxXQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7Q0FDL0IsQ0FBQyxDQUFBIiwiZmlsZSI6ImNwci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIG1lYW50IHRvIGJlIGEgY3Jvc3MtcGxhdGZvcm0gdXRpbGl0eSBzY3JpcHQgdG8gY29weSBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgZnJvbSBvbmVcbnBsYWNlIHRvIGFub3RoZXIuXG5hcmcxID0gc291cmNlXG5hcmcyID0gZGVzdGluYXRpb25cbmFyZzMgPSBnbG9iIHBhdHRlcm4gdG8gZmlsdGVyIG9uXG5cbnNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pwcmljaGFyZHNvbi9ub2RlLWZzLWV4dHJhI2NvcHlcbiovXG4vL2V4YW1wbGUgdXNhZ2U7IHdpbGwgY29weSBhbGwgZmlsZXMgRVhDRVBUIC5qcyBvciAubWQgZmlsZXMgaW50byBkaXN0XG4vL25vZGUgY3ByLmpzIC4uL3NyYyAuLi9kaXN0ICcqKi8hKCouanN8Ki5tZCknXG4vL1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzLWV4dHJhJylcbmNvbnN0IG1pbmltYXRjaCA9IHJlcXVpcmUoXCJtaW5pbWF0Y2hcIilcbmNvbnN0IGNoYWxrID0gcmVxdWlyZSgnY2hhbGsnKTtcbmNvbnN0IGFyZ3MgPSBwcm9jZXNzLmFyZ3ZcbmNvbnNvbGUubG9nKCdjcHIuanM6JylcbmxldCBtYXRjaGVyID0gKCk9Pnt9XG5pZihhcmdzWzRdKXtcbiAgICBjb25zb2xlLmxvZygnZ2xvYiBwYXR0ZXJuOiAnICsgYXJnc1s0XSlcbiAgICBtYXRjaGVyID0gKGZpbGVuYW1lKT0+e1xuICAgICAgICBjb25zdCBtYXRjaCA9IG1pbmltYXRjaChmaWxlbmFtZSwgYXJnc1s0XSlcbiAgICAgICAgY29uc3QgbXNnID0gJ2NvcHkgJyArIGZpbGVuYW1lICsgJyAtPiAnICsgbWF0Y2hcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2ggPyBtc2cgOiBjaGFsay55ZWxsb3cobXNnKSlcbiAgICAgICAgcmV0dXJuIG1hdGNoXG4gICAgfVxufVxuXG5mcy5jb3B5KGFyZ3NbMl0sIGFyZ3NbM10sIHtmaWx0ZXI6IG1hdGNoZXJ9LCBmdW5jdGlvbiAoZXJyKSB7XG4gIGlmIChlcnIpIHJldHVybiBjb25zb2xlLmVycm9yKGVycilcbiAgY29uc29sZS5sb2coJ2Nwci5qczogc3VjY2VzcycpXG59KSAvLyBjb3BpZXMgZGlyZWN0b3J5LCBldmVuIGlmIGl0IGhhcyBzdWJkaXJlY3RvcmllcyBvciBmaWxlc1xuIl19