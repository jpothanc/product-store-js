export default {
  //   transform: {
  //     "^.+\\.js$": "babel-jest", // Transpile .js files using Babel-Jest
  //   },
  collectCoverage: true, // Enable code coverage
  collectCoverageFrom: [
    "src/**/*.js", // Include all JS files in the src directory
    "!src/**/*.test.js", // Exclude test files
    "!src/index.js", // Exclude entry points if needed
  ],
  coverageDirectory: "coverage", // Directory for coverage output
  coverageReporters: ["json", "text", "lcov"], // Generate HTML, text, and JSON reports
  testEnvironment: "node",

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
