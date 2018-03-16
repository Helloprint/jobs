import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
  input: './index.ts',
  output: {
    file: '../www/app.js',
    format: 'es',
  },
  sourcemap: false,
  plugins: [
    typescript({abortOnError: false}), uglify()
  ],
}
