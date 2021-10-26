import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'
import json from '@rollup/plugin-json';
export default {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        //dir: 'output',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: true }),
      json()
    ],
    external: ['react', 'react-dom', '@material-ui/core', 'react-bootstrap', '@mui/icons-material', 'bootstrap']
  }