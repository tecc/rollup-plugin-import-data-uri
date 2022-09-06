import { lookup } from 'mime-types';
import { readFileSync } from 'fs';
import type { Plugin } from 'rollup';

export function plugin(): Plugin {
    return {
        name: 'import-data-uri',
        transform(_, id) {
            if (!id.endsWith('?data-uri')) return null;
            const idWithoutQuery = id.replace("?data-uri", "");

            const mimeType = lookup(idWithoutQuery);
            if (!mimeType) return null;

            const data = readFileSync(idWithoutQuery, 'base64');

            return `export default "data:${mimeType};base64,${data}"`
        }
    };
}
export default plugin;