const path = require('path');
const blacklist = require('metro/src/blacklist'); // eslint-disable-line
const escape = require('escape-string-regexp'); // eslint-disable-line

// const pak = require('../package.json');
// const dependencies = Object.keys(pak.dependencies);
// const peerDependencies = Object.keys(pak.peerDependencies);


module.exports = {
  getProjectRoots() {
    return [__dirname, path.resolve(__dirname, '..')];
  },
  getProvidesModuleNodeModules() {
    // return [...dependencies];
    return [
      'react-native',
      'react',
      "lodash",
      'tinycolor2',
      'faker',
      'react-native-typography',
      'prop-types',
      'react-native-vector-icons',
      // 'react-native-simple-animators',
    ];
  },
  getBlacklistRE() {
    return blacklist([
      new RegExp(`^${escape(path.resolve(__dirname, '..', 'node_modules'))}\\/.*$`),
    ]);
  },
};
