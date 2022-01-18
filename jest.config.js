module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: [
    "tests"
  ],
  
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
