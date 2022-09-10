import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
	// {
	//     name: 'node',
	// 	pkgName: '@jssj/node',
	//     buildTask: 'lib',
	//     iife: false,
	//     cjs: true,
	//     mjs: true,
	//     dts: true,
	//     submodules: true,
	//     output: 'lib',
	//     display: 'js utils for nodejs'
	// },
	// {
	//     name: 'utils',
	// 	pkgName: '@jssj/utils',
	//     buildTask: 'lib',
	//     iife: false,
	//     cjs: true,
	//     mjs: true,
	//     dts: true,
	//     output: 'lib',
	//     display: 'Shared utilities'
	// },
	// {
	//     name: 'docs',
	//     display: 'Docs',
	//     description: 'Integration wrappers for utility libraries',
	//     addon: true,
	//     submodules: true,
	//     external: ['axios'],
	//     globals: {
	//         axios: 'axios'
	//     }
	// },
	{
		name: 'request',
		pkgName: '@jssj/request',
		buildTask: 'lib',
		display: 'Request',
		description: 'jssj request module',
		author: 'saqqdy<https://github.com/saqqdy>',
		// manualImport: true,
		// addon: true,
		iife: false,
		// cjs: false,
		submodules: true,
		output: 'dist',
		// target: 'node14',
		external: ['@jssj/core']
		// globals: {
		//   'vue-router': 'VueRouter',
		// },
	}
]
