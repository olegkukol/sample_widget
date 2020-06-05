const {
    override,
    disableEsLint,
    addBabelPlugin,
    addBundleVisualizer,
    addWebpackAlias,
    addWebpackPlugin
} = require('customize-cra');
const path = require('path');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const webpack = require('webpack');
const packagejson = require('./package.json');
const gitRevisionPlugin = new GitRevisionPlugin({
    versionCommand: "log -n 1 --pretty='format:%cd' --date=format:'%d.%m.%Y'" // commit date
});
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    webpack: override(
        disableEsLint(),
        addBabelPlugin(['styled-components', { displayName: true }]),
        config => (process.env.BUNDLE_VISUALIZE == 1 ? addBundleVisualizer()(config) : config),
        addWebpackAlias({
            'src': path.resolve(__dirname, 'src'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'components': path.resolve(__dirname, 'src/components'),
            'dal': path.resolve(__dirname, 'dal'),
            'utils': path.resolve(__dirname, 'src/utils'),
            // при обновлении на styled-components ^5.0.0 поднимается несколько instance-ов приложений и предложено решение
            // по ссылке https://styled-components.com/docs/faqs
            // cмотреть заголовок "Why am I getting a warning about several instances of module on the page?"
            'styled-components': path.resolve('./node_modules/styled-components')
        }),
        addWebpackPlugin(
            new webpack.DefinePlugin({
                'process.env.COMMITDATE': JSON.stringify(gitRevisionPlugin.version()),
                'process.env.COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
                'process.env.BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
                'process.env.VERSION': JSON.stringify(packagejson.version),
            }),
            new MomentLocalesPlugin({
                localesToKeep: ['ru'],
            })
        )
    ),
};
