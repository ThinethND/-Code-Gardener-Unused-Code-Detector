export default {
  transform: {}, // Prevent Jest from trying to transform modules
  extensionsToTreatAsEsm: [".js"], // Ensure Jest treats .js files as ESM
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Fix relative imports
  },
};
