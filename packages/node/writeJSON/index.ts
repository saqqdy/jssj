import { writeFileSync } from 'fs';

/**
 * 读取json文件内容
 * 
 * @example
 * ```ts
 * import { writeJSON } from '@jssj/node'
 * writeJSON('/path/of/file', 'test data', { encoding: 'utf8 })
 * ```
 * @param args - Parameters<typeof writeFileSync>
 * @param args.path - Path to file
 * @param args.data - data
 * @param args.options - options
*/
export function writeJSON(...args: Parameters<typeof writeFileSync>): void {
    if (args[1] && typeof args[1] === 'object') {
        args[1] = JSON.stringify(args[1], null, 4);
    }
    writeFileSync(...args);
}

export default writeJSON
