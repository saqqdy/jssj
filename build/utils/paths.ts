import { resolve } from 'path'

export const ROOT = resolve(__dirname, '..', '..')
export const BUILD = resolve(ROOT, 'build')
export const PACKAGE = resolve(ROOT, 'packages')
export const CORE = resolve(PACKAGE, 'core')
export const NODE = resolve(PACKAGE, 'node')
export const DOCS = resolve(PACKAGE, 'docs')
export const SERVER = resolve(PACKAGE, 'server')
export const UI = resolve(PACKAGE, 'ui')

export const CORE_INPUT = resolve(CORE, 'src')
export const CORE_OUTPUT = resolve(CORE, 'lib')
export const NODE_INPUT = resolve(NODE, 'src')
export const NODE_OUTPUT = resolve(NODE, 'lib')
// export const DOCS_INPUT = resolve(DOCS, '.')
export const DOCS_OUTPUT = resolve(DOCS, 'dist')
// export const SERVER_INPUT = resolve(SERVER, '.')
export const SERVER_OUTPUT = resolve(SERVER, 'app')
// export const UI_INPUT = resolve(UI, '.')
export const UI_OUTPUT = resolve(UI, 'dist')