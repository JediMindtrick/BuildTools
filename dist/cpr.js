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

'use strict';

var fs = require('fs-extra');
var minimatch = require("minimatch");
var chalk = require('chalk');
var args = process.argv;
var showSeparator = function showSeparator() {
    console.log('----------------------');
};

showSeparator();
console.log(chalk.white.bgBlue.bold('Begin cpr.js:'));

var matcher = function matchAll(filename) {
    var match = minimatch(filename, '**/**');
    var msg = 'copy ' + filename + ' -> ' + match;
    console.log(match ? msg : chalk.yellow(msg));
    return match;
};
if (args[4]) {
    console.log(chalk.bold('glob pattern: ' + args[4]));
    matcher = function matchGlob(filename) {
        var match = minimatch(filename, args[4]);
        var msg = 'copy ' + filename + ' -> ' + match;
        console.log(match ? msg : chalk.yellow(msg));
        return match;
    };
}

fs.copy(args[2], args[3], { filter: matcher, clobber: true, preserveTimestamps: false }, function (err) {
    if (err) {
        console.error(err);
        console.log(chalk.red.bold('cpr.js: error'));
    } else {
        console.log(chalk.bold('cpr.js: success'));
    }

    console.log(chalk.white.bgBlue.bold('End cpr.js:'));
    showSeparator();
    return err ? err : 0;
}); // copies directory, even if it has subdirectories or files
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDOUIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3RDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO0FBQ3pCLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsR0FBTztBQUN0QixXQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7Q0FDeEMsQ0FBQTs7QUFFRCxhQUFhLEVBQUUsQ0FBQTtBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7O0FBRXJELElBQUksT0FBTyxHQUFHLFNBQVMsUUFBUSxDQUFFLFFBQVEsRUFBQztBQUN0QyxRQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQzFDLFFBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQTtBQUMvQyxXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzVDLFdBQU8sS0FBSyxDQUFBO0NBQ2YsQ0FBQTtBQUNELElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO0FBQ1AsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDbkQsV0FBTyxHQUFHLFNBQVMsU0FBUyxDQUFFLFFBQVEsRUFBQztBQUNuQyxZQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzFDLFlBQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQTtBQUMvQyxlQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzVDLGVBQU8sS0FBSyxDQUFBO0tBQ2YsQ0FBQTtDQUNKOztBQUVELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUNsRyxRQUFJLEdBQUcsRUFBQztBQUNKLGVBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDbEIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0tBQy9DLE1BQUk7QUFDRCxlQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0tBQzdDOztBQUVELFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7QUFDbkQsaUJBQWEsRUFBRSxDQUFBO0FBQ2YsV0FBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztDQUN6QixDQUFDLENBQUEiLCJmaWxlIjoiY3ByLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgbWVhbnQgdG8gYmUgYSBjcm9zcy1wbGF0Zm9ybSB1dGlsaXR5IHNjcmlwdCB0byBjb3B5IGZpbGVzIGFuZCBkaXJlY3RvcmllcyBmcm9tIG9uZVxucGxhY2UgdG8gYW5vdGhlci5cbmFyZzEgPSBzb3VyY2VcbmFyZzIgPSBkZXN0aW5hdGlvblxuYXJnMyA9IGdsb2IgcGF0dGVybiB0byBmaWx0ZXIgb25cblxuc2VlOiBodHRwczovL2dpdGh1Yi5jb20vanByaWNoYXJkc29uL25vZGUtZnMtZXh0cmEjY29weVxuKi9cbi8vZXhhbXBsZSB1c2FnZTsgd2lsbCBjb3B5IGFsbCBmaWxlcyBFWENFUFQgLmpzIG9yIC5tZCBmaWxlcyBpbnRvIGRpc3Rcbi8vbm9kZSBjcHIuanMgLi4vc3JjIC4uL2Rpc3QgJyoqLyEoKi5qc3wqLm1kKSdcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcy1leHRyYScpXG5jb25zdCBtaW5pbWF0Y2ggPSByZXF1aXJlKFwibWluaW1hdGNoXCIpXG5jb25zdCBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJyk7XG5jb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2XG5jb25zdCBzaG93U2VwYXJhdG9yID0gKCk9PntcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpXG59XG5cbnNob3dTZXBhcmF0b3IoKVxuY29uc29sZS5sb2coY2hhbGsud2hpdGUuYmdCbHVlLmJvbGQoJ0JlZ2luIGNwci5qczonKSlcblxubGV0IG1hdGNoZXIgPSBmdW5jdGlvbiBtYXRjaEFsbCAoZmlsZW5hbWUpe1xuICAgIGNvbnN0IG1hdGNoID0gbWluaW1hdGNoKGZpbGVuYW1lLCAnKiovKionKVxuICAgIGNvbnN0IG1zZyA9ICdjb3B5ICcgKyBmaWxlbmFtZSArICcgLT4gJyArIG1hdGNoXG4gICAgY29uc29sZS5sb2cobWF0Y2ggPyBtc2cgOiBjaGFsay55ZWxsb3cobXNnKSlcbiAgICByZXR1cm4gbWF0Y2hcbn1cbmlmKGFyZ3NbNF0pe1xuICAgIGNvbnNvbGUubG9nKGNoYWxrLmJvbGQoJ2dsb2IgcGF0dGVybjogJyArIGFyZ3NbNF0pKVxuICAgIG1hdGNoZXIgPSBmdW5jdGlvbiBtYXRjaEdsb2IgKGZpbGVuYW1lKXtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBtaW5pbWF0Y2goZmlsZW5hbWUsIGFyZ3NbNF0pXG4gICAgICAgIGNvbnN0IG1zZyA9ICdjb3B5ICcgKyBmaWxlbmFtZSArICcgLT4gJyArIG1hdGNoXG4gICAgICAgIGNvbnNvbGUubG9nKG1hdGNoID8gbXNnIDogY2hhbGsueWVsbG93KG1zZykpXG4gICAgICAgIHJldHVybiBtYXRjaFxuICAgIH1cbn1cblxuZnMuY29weShhcmdzWzJdLCBhcmdzWzNdLCB7ZmlsdGVyOiBtYXRjaGVyLCBjbG9iYmVyOiB0cnVlLCBwcmVzZXJ2ZVRpbWVzdGFtcHM6IGZhbHNlfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsucmVkLmJvbGQoJ2Nwci5qczogZXJyb3InKSlcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coY2hhbGsuYm9sZCgnY3ByLmpzOiBzdWNjZXNzJykpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coY2hhbGsud2hpdGUuYmdCbHVlLmJvbGQoJ0VuZCBjcHIuanM6JykpXG4gICAgc2hvd1NlcGFyYXRvcigpXG4gICAgcmV0dXJuIChlcnIgPyBlcnIgOiAwKVxufSkgLy8gY29waWVzIGRpcmVjdG9yeSwgZXZlbiBpZiBpdCBoYXMgc3ViZGlyZWN0b3JpZXMgb3IgZmlsZXNcbiJdfQ==