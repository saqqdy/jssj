import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
    {
        name: 'node',
		pkgName: '@jssj/node',
        iife: false,
        submodules: true,
        display: 'js utils for nodejs'
    },
    {
        name: 'utils',
		pkgName: '@jssj/utils',
        iife: false,
        display: 'Shared utilities'
    },
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
    // {
    //     name: 'go',
    //     display: 'gitm go',
    //     description: '',
    //     author: 'saqqdy<https://github.com/saqqdy>',
    //     addon: true,
    //     external: [],
    //     iife: false
    // },
    {
        name: 'request',
		pkgName: '@jssj/request',
        display: 'Request',
        description: 'jssj request module',
        author: 'saqqdy<https://github.com/saqqdy>',
        // manualImport: true,
        // addon: true,
        iife: false,
        // cjs: false,
        submodules: true,
        target: 'node14',
        external: ['@jssj/core']
        // globals: {
        //   'vue-router': 'VueRouter',
        // },
    }
]
