import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
 
const config = {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'esm'
  },
  plugins: [
    babel({
        exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
 
export default config;