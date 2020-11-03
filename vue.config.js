// 量化
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// 分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = {
  configureWebpack: smp.wrap(config => {
    const plugins = [];
    // 为模块提供中间缓存，首次构建时间没有太大变化，但是第二次开始，构建时间大约可以节约 80%。
    plugins.push(new HardSourceWebpackPlugin());

    if (process.env.IS_ANALYZ) {
      plugins.push(new BundleAnalyzerPlugin());
    }
    // config.plugins = [...config.plugins, ...plugins];
    return { plugins };
  })
};
