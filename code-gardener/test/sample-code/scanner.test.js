const { detectUnusedCode } = require("../src/scanner");

test("Detects unused variables", async () => {
    const unused = await detectUnusedCode();
    expect(unused.length).toBeGreaterThan(0);
});
