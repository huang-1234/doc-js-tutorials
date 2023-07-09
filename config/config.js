const config = {
  mode: 'site',
  title: 'doc-js-tutorials',
  description: 'JavaScript 完全知识体系',
  base: '/doc-js-tutorials/',
  publicPath: '/doc-js-tutorials/',
  favicon: './favicon.ico',
  logo: './favicon.png',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/huang-1234/doc-js-tutorials',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
