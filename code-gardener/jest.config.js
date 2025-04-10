module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Transform JavaScript/TypeScript files using Babel
  },
  extensionsToTreatAsEsm: [".js"],
  transformIgnorePatterns: [
    "/node_modules/(?!(globby|fast-glob)/)", // Allow Jest to transform specific ESM modules
  ],
};