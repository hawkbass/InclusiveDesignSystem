import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import { readFileSync } from 'fs'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: './dist/types',
      }),
      postcss({
        extract: 'styles.css',
        minimize: true,
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // Tokens entry point
  {
    input: 'src/tokens.ts',
    output: [
      {
        file: 'dist/tokens.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/tokens.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  // CSS tokens (just copy)
  {
    input: 'src/tokens.css',
    output: [{ file: 'dist/tokens.css' }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
]
