export default {
  transform: {
    "^.+\\.js$": "babel-jest", // Transpile .js files using Babel-Jest
  },
  testEnvironment: "node",

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
