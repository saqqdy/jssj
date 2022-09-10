import { normalize, resolve } from 'path'
import esbuild from 'rollup-plugin-esbuild'
import fg from 'fast-glob'
import type { OutputOptions, RollupOptions } from 'rollup'
import { packages } from './packages'
import {
	dtsPlugin,
	esbuildMinify,
	esbuildPlugin,
	injectJssjCore,
	minifyBanner,
	resolvePlugin,
	shebangPlugin,
	visualPlugin
} from './rollup-plugins'
import { banner } from './config'

// const production = !process.env.ROLLUP_WATCH

const options: RollupOptions[] = []
const externals = ['js-cool', '@jssj/utils', '@jssj/core']

for (const {
	globals = {},
	name,
	external = [],
	submodules,
	iife,
	build,
	cjs,
	mjs,
	dts,
	target
} of packages) {
	if (build === false) continue
	// const pkg = require(`packages/${name}/package.json`)
	// const deps = Object.keys(pkg.dependencies || {})
	const iifeGlobals = {
		'js-cool': 'JsCool',
		'@jssj/utils': 'Jssj',
		'@jssj/core': 'Jssj',
		...globals
	}
	const iifeName = 'Jssj'
	const functionNames = ['index']

	// submodules
	if (submodules)
		functionNames.push(
			...fg
				.sync('*/index.ts', { cwd: resolve(`packages/${name}`) })
				.map(i => i.split('/')[0])
		)

	for (const fn of functionNames) {
		const input =
			fn === 'index'
				? `packages/${name}/index.ts`
				: `packages/${name}/${fn}/index.ts`
		const output: OutputOptions[] = []
		// output mjs
		if (mjs !== false) {
			output.push({
				file: `packages/${name}/dist/${fn}.mjs`,
				banner,
				format: 'es'
			})
		}
		// output cjs
		if (cjs !== false) {
			output.push({
				file: `packages/${name}/dist/${fn}.cjs`,
				banner,
				format: 'cjs'
			})
		}
		// output iife
		if (iife !== false) {
			output.push(
				{
					file: `packages/${name}/dist/${fn}.iife.js`,
					format: 'iife',
					name: iifeName,
					extend: true,
					globals: iifeGlobals,
					banner,
					plugins: [
						// injectJssjCore,
					]
				},
				{
					file: `packages/${name}/dist/${fn}.iife.min.js`,
					format: 'iife',
					name: iifeName,
					extend: true,
					globals: iifeGlobals,
					plugins: [
						// injectJssjCore,
						esbuildMinify({
							minify: true
						}),
						minifyBanner({
							banner
						})
					]
				}
			)
		}

		// create library options
		options.push({
			input,
			output,
			plugins: [
				resolvePlugin,
				target ? esbuild({ target }) : esbuildPlugin,
				shebangPlugin
			],
			external: [...externals, ...external]
			// external(id) {
			//     return (
			//         ['regenerator-runtime', ...externals, ...external].some(k =>
			//             new RegExp('^' + k).test(id)
			//         ) || deps.some(k => new RegExp('^' + k).test(id))
			//     )
			// }
		})

		// create dts options
		if (dts !== false) {
			options.push({
				input,
				output: {
					file: `packages/${name}/dist/${fn}.d.ts`,
					format: 'es'
				},
				plugins: [dtsPlugin],
				external: [...externals, ...external]
			})
		}
	}
}

export default options
