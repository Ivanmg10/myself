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
    'src/app/**/*.{ts,tsx}',  // <--- ahora apunta dentro de src
    '!src/app/**/*.d.ts',
    '!src/app/**/index.tsx',
    '!node_modules/**',
  ],
  coverageDirectory: '<rootDir>/coverage', // directorio de reporte
  coverageReporters: ['text', 'lcov'],     // consola + HTML
}

export default createJestConfig(customJestConfig)
