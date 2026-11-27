import nextJest from 'next/jest.js' // <--- IMPORTANTE: .js

const createJestConfig = nextJest({
  dir: './', // raíz del proyecto Next.js
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom', // entorno jsdom instalado
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // si usas alias @
  },
  collectCoverage: true, // activa coverage
  collectCoverageFrom: [
    'src/app/**/*.{ts,tsx}',
    'src/data/**/*.ts',
    'src/proxy.ts',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: { branches: 100, functions: 100, lines: 100, statements: 100 },
  },
  coverageDirectory: '<rootDir>/coverage', // directorio de reporte
  coverageReporters: ['text', 'lcov'],     // consola + HTML
}

export default createJestConfig(customJestConfig)
