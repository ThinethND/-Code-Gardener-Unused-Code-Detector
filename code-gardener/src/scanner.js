const { ESLint } = require("eslint");
const globby = require("globby");

const detectUnusedCode = async () => {
    const eslint = new ESLint({ overrideConfig: { rules: { "no-unused-vars": "error" } } });

    const filePaths = await globby(["**/*.js", "!node_modules/**"]);
    const results = await eslint.lintFiles(filePaths);

    return results.flatMap(file =>
        file.messages.filter(msg => msg.ruleId === "no-unused-vars").map(msg => ({
            file: file.filePath,
            line: msg.line,
            column: msg.column,
            message: msg.message
        }))
    );
};

module.exports = { detectUnusedCode };
