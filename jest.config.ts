module.exports = {
    testEnvironment: 'node', 
    transformIgnorePatterns: [
        '/node_modules/',
      ],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    roots: ['test_jest'],
    testMatch: ['**/test_jest/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)']
  };
  