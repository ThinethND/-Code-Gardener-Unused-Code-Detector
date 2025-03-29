const fs = require("fs-extra");

const removeUnusedCode = async (unusedItems) => {
    for (const item of unusedItems) {
        const fileContent = await fs.readFile(item.file, "utf8");
        const lines = fileContent.split("\n");

        // Comment out the unused code line
        lines[item.line - 1] = `// 🔴 Unused: ${lines[item.line - 1]}`;

        await fs.writeFile(item.file, lines.join("\n"), "utf8");
    }
    console.log("✅ Unused code has been commented out safely.");
};

module.exports = { removeUnusedCode };
