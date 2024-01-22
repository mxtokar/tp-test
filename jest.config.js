module.exports = {
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		axios: 'axios/dist/node/axios.cjs',
		'^core/(.*)$': '<rootDir>/src/core/$1',
		'^pages/(.*)$': '<rootDir>/src/pages/$1',
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^store/(.*)$': '<rootDir>/src/store/$1',
		'^utils/(.*)$': '<rootDir>/src/utils/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
};
