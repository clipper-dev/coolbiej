import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-plugin-preserve-directives'

const outputOptions = {
  sourcemap: false,
  preserveModules: true,
  preserveModulesRoot: 'src',
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs',
        exports: 'auto',
        ...outputOptions,
      },
      {
        dir: 'dist',
        format: 'esm',
        ...outputOptions,
      },
    ],
    external: ['react', 'react-dom', '@babel/runtime', 'tslib'],
    plugins: [
      postcss({
        extensions: ['.css'],
        modules: true,
      }),
      typescript(),
      peerDepsExternal(),
      resolve(),
      preserveDirectives(),
      terser({ compress: { directives: false } }),
    ],
    onwarn(warning, warn) {
      if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
        warn(warning)
      }
    },
  },
]
