const { createDefaultPreset } = require("ts-jest");
const tsJestTransformCfg = createDefaultPreset().transform;

module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
    "^.+\\.js$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|deck\\.gl|ng-dynamic)"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/frontend/src/$1"
  },
  globals: {
    "ts-jest": {
      tsconfig: "frontend/tsconfig.app.json",
      allowJs: true
    }
  },
  setupFilesAfterEnv: ["<rootDir>/frontend/src/setupTests.ts"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': 'ts-jest'
  },
};
