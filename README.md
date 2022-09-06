# rollup-plugin-import-data-uri

A simple plugin to import any file as a data URI.

Compatible with Rollup and Vite.

This plugin is *not* the same as [`@rollup/plugin-data-uri`](https://npmjs.com/package/@rollup/plugin-data-uri) - this plugin creates data URIs and exports them, whilst `@rollup/plugin-data-uri` allows you to import raw code from data URIs.

## Usage

### Configuration

#### Vite

```js
// vite.config.js
import dataURIPlugin from 'rollup-plugin-import-data-uri';

export default {
    plugins: [dataURIPlugin(), /* other plugins */],
    /* also the rest of your configuration */
}
```

### Example

If you're using Vite, the following would give you a URL to the image.

```js
import IMAGE from './image.png';
```

Appending `?data-uri` to the end of the import would make it a string containing a data URI:

```js
import IMAGE from './image.png?data-uri';
```

This is suitable for embedding images.

## Licence

This project is licensed under the MIT licence. 
See the full licence text [here](./LICENCE).
