// Frontend/jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // alias your @/... imports to src/…
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',

    // CSS modules & styles → identity proxy
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',

    // images/fonts → stub out as empty string
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // automatically clear mock calls between tests
  clearMocks: true,
};
