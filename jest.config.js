module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src']
};
