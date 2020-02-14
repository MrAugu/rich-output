const ConsoleStyle = require("../index.js");

console.log("Running a test: Displaying all available styles.");

console.log(`This is ${ConsoleStyle.bold("bold")}.`);
console.log(`This is, well, ${ConsoleStyle.thin("thin")}.`);
console.log(`This is ${ConsoleStyle.underscore("underscore")}.`);
console.log(`This is ${ConsoleStyle.swap("swap")}.`);

console.log(`This is ${ConsoleStyle.black("black")}. (black)`);
console.log(`This is ${ConsoleStyle.red("red")}.`);
console.log(`This is ${ConsoleStyle.green("green")}.`);
console.log(`This is ${ConsoleStyle.yellow("yellow")}.`);
console.log(`This is ${ConsoleStyle.blue("blue")}.`);
console.log(`This is ${ConsoleStyle.magenta("magenta")}.`);
console.log(`This is ${ConsoleStyle.cyan("cyan")}.`);
console.log(`This is,  well, ${ConsoleStyle.white("white")}.`);

console.log(`This is ${ConsoleStyle.brightBlack("bright black")}.`);
console.log(`This is ${ConsoleStyle.brightRed("bright red")}.`);
console.log(`This is ${ConsoleStyle.brightGreen("bright green")}.`);
console.log(`This is ${ConsoleStyle.brightYellow("bright yellow")}.`);
console.log(`This is ${ConsoleStyle.brightBlue("bright blue")}.`);
console.log(`This is ${ConsoleStyle.brightMagenta("bright magenta")}.`);
console.log(`This is ${ConsoleStyle.brightCyan("bright cyan")}.`);
console.log(`This is ${ConsoleStyle.brightWhite("bright white")}.`);

console.log(`This is, well, ${ConsoleStyle.bgBlack("black background")}.`);
console.log(`This is ${ConsoleStyle.bgRed("red background")}.`);
console.log(`This is ${ConsoleStyle.bgGreen("green background")}.`);
console.log(`This is ${ConsoleStyle.bgYellow("yellow background")}.`);
console.log(`This is ${ConsoleStyle.bgBlue("blue background")}.`);
console.log(`This is ${ConsoleStyle.bgMagenta("magenta background")}.`);
console.log(`This is ${ConsoleStyle.bgCyan("cyan background")}.`);
console.log(`This is ${ConsoleStyle.bgWhite("white background")}.`);

console.log(`This is ${ConsoleStyle.bgBrightBlack("bright black background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightRed("bright red background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightGreen("bright green background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightYellow("bright yellow background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightBlue("bright blue background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightMagenta("bright magenta background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightCyan("bright cyan background")}.`);
console.log(`This is ${ConsoleStyle.bgBrightWhite("bright white background")}.`);

console.log("Test ended.");