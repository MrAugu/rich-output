const ConsoleStyle = {
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
    bold: ConsoleStyle.bold,
    thin: ConsoleStyle.thin,
    underscore: ConsoleStyle.underscore,
    swap: ConsoleStyle.swap,
    /* Text Color Styles */
    black: ConsoleStyle.black,
    red: ConsoleStyle.red,
    green: ConsoleStyle.green,
    yellow: ConsoleStyle.yellow,
    blue: ConsoleStyle.blue,
    magenta: ConsoleStyle.magenta,
    cyan: ConsoleStyle.cyan,
    white: ConsoleStyle.white,
    brightBlack: ConsoleStyle.brightBlack,
    brightRed: ConsoleStyle.brightRed,
    brightGreen: ConsoleStyle.brightGreen,
    brightYellow: ConsoleStyle.brightYellow,
    brightBlue: ConsoleStyle.brightBlue,
    brightMagenta: ConsoleStyle.brightMagenta,
    brightCyan: ConsoleStyle.brightCyan,
    brightWhite: ConsoleStyle.brightWhite,
    /* Text Background Styles */
    bgBlack: ConsoleStyle.bgBlack,
    bgRed: ConsoleStyle.bgRed,
    bgGreen: ConsoleStyle.bgGreen,
    bgYellow: ConsoleStyle.bgYellow,
    bgBlue: ConsoleStyle.bgBlue,
    bgMagenta: ConsoleStyle.bgMagenta,
    bgCyan: ConsoleStyle.bgCyan,
    bgWhite: ConsoleStyle.bgWhite,
    bgBrightBlack: ConsoleStyle.bgBrightBlack,
    bgBrightRed: ConsoleStyle.bgBrightRed,
    bgBrightGreen: ConsoleStyle.bgBrightGreen,
    bgBrightYellow: ConsoleStyle.bgBrightYellow,
    bgBrightBlue: ConsoleStyle.bgBrightBlue,
    bgBrightMagenta: ConsoleStyle.bgBrightMagenta,
    bgBrightCyan: ConsoleStyle.bgBrightCyan,
    bgBrightWhite: ConsoleStyle.bgBrightWhite,
};