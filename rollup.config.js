import { terser } from 'rollup-plugin-minification';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/components/index.js',
  output: {
    file: './dist/index.js',
  },
  external: ['classnames', 'react', 'react-dom'],
  plugins: [
    postcss({
      extract: false,
      sourceMap: false,
      inject: true,
      extensions: ['.less', '.css'],
      use: {
        less: { javascriptEnabled: true },
      },
    }),
    babel({ presets: ['@babel/preset-react'], babelHelpers: 'bundled' }),
    terser(),
    // 打包依赖
    // nodeResolve(),
    commonjs(),
  ],
};
