import type { PackageManifest } from './types'

export const packages: PackageManifest[] = [
    {
        name: 'utils',
        display: 'Shared utilities'
    },
    // {
    //     name: 'core',
    //     display: 'Gitmars',
    //     description: '这是一个git工作流工具'
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
