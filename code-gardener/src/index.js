const { detectUnusedCode } = require("./scanner");
const { generateReport } = require("./reporter");

const scanProject = async (options) => {
    console.log("🔍 Scanning for unused code...");

    const unusedItems = await detectUnusedCode();

    if (unusedItems.length === 0) {
        console.log("✅ No unused code found!");
        return;
    }

    generateReport(unusedItems);

    if (!options.dryRun) {
        console.log("🗑️ Removing unused code...");
        // Add code to remove unused variables safely.
    }
};

module.exports = { scanProject };
