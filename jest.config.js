const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/Frontend/src/$1"
  },
  globals: {
    "ts-jest": {
      tsconfig: "Frontend/tsconfig.app.json"
    }
  }
};
