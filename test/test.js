const RichOutput = require("../index.js");

console.log("Running a test: Displaying all available styles.");

console.log(`This is ${RichOutput.bold("bold")}.`);
console.log(`This is, well, ${RichOutput.thin("thin")}.`);
console.log(`This is ${RichOutput.underscore("underscore")}.`);
console.log(`This is ${RichOutput.swap("swap")}.`);

console.log(`This is ${RichOutput.black("black")}. (black)`);
console.log(`This is ${RichOutput.red("red")}.`);
console.log(`This is ${RichOutput.green("green")}.`);
console.log(`This is ${RichOutput.yellow("yellow")}.`);
console.log(`This is ${RichOutput.blue("blue")}.`);
console.log(`This is ${RichOutput.magenta("magenta")}.`);
console.log(`This is ${RichOutput.cyan("cyan")}.`);
console.log(`This is,  well, ${RichOutput.white("white")}.`);

console.log(`This is ${RichOutput.brightBlack("bright black")}.`);
console.log(`This is ${RichOutput.brightRed("bright red")}.`);
console.log(`This is ${RichOutput.brightGreen("bright green")}.`);
console.log(`This is ${RichOutput.brightYellow("bright yellow")}.`);
console.log(`This is ${RichOutput.brightBlue("bright blue")}.`);
console.log(`This is ${RichOutput.brightMagenta("bright magenta")}.`);
console.log(`This is ${RichOutput.brightCyan("bright cyan")}.`);
console.log(`This is ${RichOutput.brightWhite("bright white")}.`);

console.log(`This is, well, ${RichOutput.bgBlack("black background")}.`);
console.log(`This is ${RichOutput.bgRed("red background")}.`);
console.log(`This is ${RichOutput.bgGreen("green background")}.`);
console.log(`This is ${RichOutput.bgYellow("yellow background")}.`);
console.log(`This is ${RichOutput.bgBlue("blue background")}.`);
console.log(`This is ${RichOutput.bgMagenta("magenta background")}.`);
console.log(`This is ${RichOutput.bgCyan("cyan background")}.`);
console.log(`This is ${RichOutput.bgWhite("white background")}.`);

console.log(`This is ${RichOutput.bgBrightBlack("bright black background")}.`);
console.log(`This is ${RichOutput.bgBrightRed("bright red background")}.`);
console.log(`This is ${RichOutput.bgBrightGreen("bright green background")}.`);
console.log(`This is ${RichOutput.bgBrightYellow("bright yellow background")}.`);
console.log(`This is ${RichOutput.bgBrightBlue("bright blue background")}.`);
console.log(`This is ${RichOutput.bgBrightMagenta("bright magenta background")}.`);
console.log(`This is ${RichOutput.bgBrightCyan("bright cyan background")}.`);
console.log(`This is ${RichOutput.bgBrightWhite("bright white background")}.`);

console.log("Test ended.");