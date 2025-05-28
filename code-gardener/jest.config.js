module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Transform JavaScript/TypeScript files using Babel
  },
  // Remove this line as it's causing conflicts with CommonJS code
  // extensionsToTreatAsEsm: [".js"],
  transformIgnorePatterns: [
    "/node_modules/(?!(globby|fast-glob|p-map|slash|dir-glob|merge2|path-type)/)", // Include all ESM dependencies
  ],
};