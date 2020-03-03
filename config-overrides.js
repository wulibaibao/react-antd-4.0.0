const {
    override,
    disableEsLint,
    overrideDevServer,
    addDecoratorsLegacy,
    watchAll,
    addWebpackAlias,
    addWebpackExternals,
    fixBabelImports,
    addWebpackPlugin
} = require("customize-cra");
const path = require('path')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
    webpack: override(
        // usual webpack plugin
        disableEsLint(),
        addDecoratorsLegacy(),
        addWebpackAlias({
            ["@pages"]: path.resolve(__dirname, "src/Pages"),
            ["@components"]: path.resolve(__dirname, "src/components"),
        }),
        addWebpackExternals({

        }),
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        addWebpackPlugin(new AntdDayjsWebpackPlugin())
    ),
    devServer: overrideDevServer(
        // dev server plugin
        watchAll()
    )
};