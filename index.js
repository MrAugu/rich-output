const RichOutput = {
    /* Non-Color Styes */
    bold: (input) => {
        return `\x1b[1m${input}\x1b[0m`;
    },
    thin: (input) => {
        return `\x1b[2m${input}\x1b[0m`;
    },
    underscore: (input) => {
        return `\x1b[4m${input}\x1b[0m`;
    },
    swap: (input) => {
        return `\x1b[7m${input}\x1b[0m`;
    },
    /* Text Color Styles */
    black: (input) => {
        return `\x1b[30m${input}\x1b[0m`;
    },
    red: (input) => {
        return `\x1b[31m${input}\x1b[0m`;
    },
    green: (input) => {
        return `\x1b[32m${input}\x1b[0m`;
    },
    yellow: (input) => {
        return `\x1b[33m${input}\x1b[0m`;
    },
    blue: (input) => {
        return `\x1b[34m${input}\x1b[0m`;
    },
    magenta: (input) => {
        return `\x1b[35m${input}\x1b[0m`;
    },
    cyan: (input) => {
        return `\x1b[36m${input}\x1b[0m`;
    },
    white: (input) => {
        return `\x1b[37m${input}\x1b[0m`;
    },
    brightBlack: (input) => {
        return `\x1b[90m${input}\x1b[0m`;
    },
    brightRed: (input) => {
        return `\x1b[91m${input}\x1b[0m`;
    },
    brightGreen: (input) => {
        return `\x1b[92m${input}\x1b[0m`;
    },
    brightYellow: (input) => {
        return `\x1b[93m${input}\x1b[0m`;
    },
    brightBlue: (input) => {
        return `\x1b[94m${input}\x1b[0m`;
    },
    brightMagenta: (input) => {
        return `\x1b[95m${input}\x1b[0m`;
    },
    brightCyan: (input) => {
        return `\x1b[96m${input}\x1b[0m`;
    },
    brightWhite: (input) => {
        return `\x1b[97m${input}\x1b[0m`;
    },
    /* Text Background Styles */
    bgBlack: (input) => {
        return `\x1b[40m${input}\x1b[0m`;
    },
    bgRed: (input) => {
        return `\x1b[41m${input}\x1b[0m`;
    },
    bgGreen: (input) => {
        return `\x1b[42m${input}\x1b[0m`;
    },
    bgYellow: (input) => {
        return `\x1b[43m${input}\x1b[0m`;
    },
    bgBlue: (input) => {
        return `\x1b[44m${input}\x1b[0m`;
    },
    bgMagenta: (input) => {
        return `\x1b[45m${input}\x1b[0m`;
    },
    bgCyan: (input) => {
        return `\x1b[46m${input}\x1b[0m`;
    },
    bgWhite: (input) => {
        return `\x1b[47m${input}\x1b[0m`;
    },
    bgBrightBlack: (input) => {
        return `\x1b[100m${input}\x1b[0m`;
    },
    bgBrightRed: (input) => {
        return `\x1b[101m${input}\x1b[0m`;
    },
    bgBrightGreen: (input) => {
        return `\x1b[102m${input}\x1b[0m`;
    },
    bgBrightYellow: (input) => {
        return `\x1b[103m${input}\x1b[0m`;
    },
    bgBrightBlue: (input) => {
        return `\x1b[104m${input}\x1b[0m`;
    },
    bgBrightMagenta: (input) => {
        return `\x1b[105m${input}\x1b[0m`;
    },
    bgBrightCyan: (input) => {
        return `\x1b[106m${input}\x1b[0m`;
    },
    bgBrightWhite: (input) => {
        return `\x1b[107m${input}\x1b[0m`;
    },
}

module.exports = {
    /* Non-Color Styes */
    bold: RichOutput.bold,
    thin: RichOutput.thin,
    underscore: RichOutput.underscore,
    swap: RichOutput.swap,
    /* Text Color Styles */
    black: RichOutput.black,
    red: RichOutput.red,
    green: RichOutput.green,
    yellow: RichOutput.yellow,
    blue: RichOutput.blue,
    magenta: RichOutput.magenta,
    cyan: RichOutput.cyan,
    white: RichOutput.white,
    brightBlack: RichOutput.brightBlack,
    brightRed: RichOutput.brightRed,
    brightGreen: RichOutput.brightGreen,
    brightYellow: RichOutput.brightYellow,
    brightBlue: RichOutput.brightBlue,
    brightMagenta: RichOutput.brightMagenta,
    brightCyan: RichOutput.brightCyan,
    brightWhite: RichOutput.brightWhite,
    /* Text Background Styles */
    bgBlack: RichOutput.bgBlack,
    bgRed: RichOutput.bgRed,
    bgGreen: RichOutput.bgGreen,
    bgYellow: RichOutput.bgYellow,
    bgBlue: RichOutput.bgBlue,
    bgMagenta: RichOutput.bgMagenta,
    bgCyan: RichOutput.bgCyan,
    bgWhite: RichOutput.bgWhite,
    bgBrightBlack: RichOutput.bgBrightBlack,
    bgBrightRed: RichOutput.bgBrightRed,
    bgBrightGreen: RichOutput.bgBrightGreen,
    bgBrightYellow: RichOutput.bgBrightYellow,
    bgBrightBlue: RichOutput.bgBrightBlue,
    bgBrightMagenta: RichOutput.bgBrightMagenta,
    bgBrightCyan: RichOutput.bgBrightCyan,
    bgBrightWhite: RichOutput.bgBrightWhite,
};