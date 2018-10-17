import { css } from 'docz-plugin-css';

export default {
  title: 'CSS PostCSS',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
    }),
  ],
  modifyBabelRc: babelrc => ({
    ...babelrc,
    plugins: [
      ...babelrc.plugins,
      [
        'module-resolver',
        {
          root: [process.env.NODE_PATH],
        },
      ],
    ],
  }),
};
