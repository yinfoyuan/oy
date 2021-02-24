module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ["ts", "vue", "js", "json"],
    transform: {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.tsx?$": "ts-jest"
    },
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageReporters: ["html", "text-summary"],
  snapshotSerializers: ['jest-serializer-vue']
};