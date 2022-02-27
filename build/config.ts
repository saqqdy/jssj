const path = require('path')
// const nodeExternals = require('webpack-node-externals')
let externals = {}

// externals = [Object.assign({}, externals), nodeExternals() /*, /^core-js\/.+$/, /^js-cool\/.+$/*/]

const extensions = [
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

const alias = {
    '@': path.resolve(__dirname, '../src'),
    jssj: path.resolve(__dirname, './')
}

const jsexclude = /node_modules/

export default {
    externals,
    extensions,
    alias,
    jsexclude
}
