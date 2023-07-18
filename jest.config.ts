import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    roots: ['<rootDir>/src'],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testEnvironment: 'node',
    collectCoverage: true,
    coverageProvider: 'v8',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,js}'
    ],
    testPathIgnorePatterns: [
        '/node_modules/'
    ],
    coverageDirectory: "./coverage"
};

export default config;