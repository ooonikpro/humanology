// Convert kebab-case to PascalCase
export function toPascalCase<T extends string>(str: string): T {
	return str.replace(/(^\w|-\w)/g, (entry: string) =>
			entry.replace('-', '').toUpperCase()
	) as T;
}