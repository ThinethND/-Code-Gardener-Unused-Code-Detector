const chalk = require("chalk");

const generateReport = (unusedItems) => {
    console.log (chalk.green("\n 🌱 Code Gardener Report: "));

    if (unusedItems.length === 0) {
        console.log(chalk.backgroundColorNames("✅ No unused code found!"));
        return;
    }

    unusedItems.forEach((item, index) => {
        console.log(chalk.yellow(`\n${index + 1}. ${item.message}`));
        console.log(chalk.gray(` at ${item.file}:${item.line}:${item.colunm}`));
    });
};

module.exports = { generateReport };