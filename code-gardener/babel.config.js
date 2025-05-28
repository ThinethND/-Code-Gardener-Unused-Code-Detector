module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}]
  ],
  plugins: [
    // This helps with dynamic imports
    '@babel/plugin-syntax-dynamic-import'
  ]
};