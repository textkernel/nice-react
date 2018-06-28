const path = require('path');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

console.log('\n\n------------');
console.log('config', genDefaultConfig);

/**
 * Extend the current storybook webpack config to resolve the library components path
 */

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
    config.resolve.alias['nice-react'] = path.resolve(__dirname, '../lib');

    return config;
};
