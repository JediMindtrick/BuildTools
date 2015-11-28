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

const fs = require('fs-extra')
const minimatch = require("minimatch")
const chalk = require('chalk');
const args = process.argv
const showSeparator = ()=>{
    console.log('----------------------')
}

showSeparator()
console.log(chalk.white.bgBlue.bold('Begin cpr.js:'))

let matcher = function matchAll (filename){
    const match = minimatch(filename, '**/**')
    const msg = 'copy ' + filename + ' -> ' + match
    console.log(match ? msg : chalk.yellow(msg))
    return match
}
if(args[4]){
    console.log(chalk.bold('glob pattern: ' + args[4]))
    matcher = function matchGlob (filename){
        const match = minimatch(filename, args[4])
        const msg = 'copy ' + filename + ' -> ' + match
        console.log(match ? msg : chalk.yellow(msg))
        return match
    }
}

fs.copy(args[2], args[3], {filter: matcher, clobber: true, preserveTimestamps: false}, function (err) {
    if (err){
        console.error(err)
        console.log(chalk.red.bold('cpr.js: error'))
    }else{
        console.log(chalk.bold('cpr.js: success'))
    }

    console.log(chalk.white.bgBlue.bold('End cpr.js:'))
    showSeparator()
    return (err ? err : 0)
}) // copies directory, even if it has subdirectories or files
