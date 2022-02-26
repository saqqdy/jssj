
/* eslint-disable no-global-assign */
require('esbuild-register')

// import type { Options as ESBuildOptions } from 'rollup-plugin-esbuild'
import esbuild from 'rollup-plugin-esbuild'
// import resolve from '@rollup/plugin-node-resolve'
// import babel from '@rollup/plugin-babel'
// import commonjs from '@rollup/plugin-commonjs'
// import { terser } from 'rollup-plugin-terser'
// import typescript from 'rollup-plugin-typescript2'
// import { visualizer } from 'rollup-plugin-visualizer'
import pkg from './package.json'

// const config = require('./build/config')

const production = !process.env.ROLLUP_WATCH

export default [
    {
        input: 'packages/request/index.ts',
        output: [
            // {
            //     file: pkg.main,
            //     exports: 'auto',
            //     format: 'cjs',
            //     banner: config.banner
            // },
            {
                file: 'lib/index.esm.js',
                exports: 'auto',
                format: 'es',
                // banner: config.banner
            }
        ],
        plugins: [
            // resolve({
            //     // Use the `package.json` "browser" field
            //     browser: true,
            //     // Resolve .mjs and .js files
            //     extensions: ['.mjs', '.js'],
            //     // Prefer node.js built-ins instead of npm packages
            //     preferBuiltins: true,
            //     customResolveOptions: {
            //         moduleDirectories: ['node_modules']
            //     }
            // }),
            esbuild()
            // commonjs({
            //     sourceMap: false
            // }),
            // typescript({
            //     tsconfigOverride: {
            //         compilerOptions: {
            //             declaration: false,
            //             target: 'es6'
            //         },
            //         include: ['src/**/*.ts'],
            //         exclude: [
            //             'node_modules',
            //             '__tests__',
            //             'core-js',
            //             'js-cool',
            //             'axios'
            //         ]
            //     },
            //     abortOnError: false
            // }),
            // babel({
            //     babelHelpers: 'bundled',
            //     extensions: config.extensions,
            //     exclude: [/\/core-js\//, 'node_modules/**'],
            //     // runtimeHelpers: true,
            //     sourceMap: true
            // }),
            // visualizer()
        ],
        external(id) {
            return ['core-js', 'axios', 'js-cool', 'regenerator-runtime'].some(
                k => new RegExp('^' + k).test(id)
            )
        }
    }
]
