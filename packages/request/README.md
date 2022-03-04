<div style="text-align: center;" align="center">

# @jssj/request

A simplified http request client for nodejs

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use npm
$ npm install @jssj/request --save

# use yarn
$ yarn add @jssj/request

# use pnpm
$ pnpm install @jssj/request
```

## Usage

### for GET method

```js
const request = require('@jssj/request')

request
    .get({
        url: '/your/api/url',
        data: {
            //
        },
        headers: { 'Content-Type': 'application/json' } // rewrite headers
    })
    .then(() => {
        // complete
    })
    .catch(() => {
        // error
    })
```

### for POST method

```js
const request = require('@jssj/request')

request
    .post({
        url: '/your/api/url',
        data: {
            //
        },
        headers: { 'Content-Type': 'application/json' } // rewrite headers
    })
    .then(() => {
        // complete
    })
    .catch(() => {
        // error
    })
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/@jssj/request/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@jssj/request.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@jssj/request
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@jssj/request/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@jssj/request&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@jssj/request.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@jssj/request?branch=master
[download-image]: https://img.shields.io/npm/dm/@jssj/request.svg?style=flat-square
[download-url]: https://npmjs.org/package/@jssj/request
[gzip-image]: http://img.badgesize.io/https://unpkg.com/@jssj/request/index.cjs?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/@jssj/request/index.cjs?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_@jssj/request
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_@jssj/request
