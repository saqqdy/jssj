const path = require('path')
const pkg = require('../package.json')
// const nodeExternals = require('webpack-node-externals')
let externals = {}

// externals = [Object.assign({}, externals), nodeExternals() /*, /^core-js\/.+$/, /^js-cool\/.+$/*/]

export const banner =
    '/*!\n' +
    ' * ' +
    pkg.name +
    ' v' +
    pkg.version +
    '\n' +
    ' * ' +
    pkg.description +
    '\n' +
    ' * (c) 2021-' +
    new Date().getFullYear() +
    ' saqqdy \n' +
    ' * Released under the MIT License.\n' +
    ' */'
export const bannerText =
    pkg.name +
    ' v' +
    pkg.version +
    '\n' +
    pkg.description +
    '\n' +
    '(c) 2021-' +
    new Date().getFullYear() +
    ' saqqdy \n' +
    'Released under the MIT License.'

export const extensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.es6',
    '.es',
    '.mjs',
    '.ts',
    '.json'
]

export const alias = {
    '@': path.resolve(__dirname, '../src'),
    jssj: path.resolve(__dirname, './')
}

export const jsexclude = /node_modules/
