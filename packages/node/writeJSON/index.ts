import type { PathOrFileDescriptor, WriteFileOptions } from 'fs'
import { writeFileSync } from 'fs'

/**
 * 写入json文件内容
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
export function writeJSON(
	file: PathOrFileDescriptor,
	data: Record<string, unknown> | Parameters<typeof writeFileSync>[1],
	options?: WriteFileOptions
): void {
	if (typeof data === 'object') {
		data = (data && JSON.stringify(data, null, 4)) || ''
	}
	writeFileSync(file, data, options)
}
