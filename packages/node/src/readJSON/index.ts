import { readFileSync } from 'fs'

/**
 * 读取json文件内容
 *
 * @example
 * ```ts
 * import { readJSON } from '@jssj/node'
 * const data = readJSON('/path/of/json', { encoding: 'utf8 }) // { "name": "saqqdy" }
 * ```
 * @param args - Parameters<typeof readFileSync>
 * @param args.path - Path to file
 * @param args.options - options
 * @returns result - json | {}
 */
export function readJSON(
	...args: Parameters<typeof readFileSync>
): Record<string, unknown> {
	const data = readFileSync(...args).toString()
	try {
		return JSON.parse(data)
	} catch {
		return {}
	}
}
